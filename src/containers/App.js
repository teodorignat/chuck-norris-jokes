import React, { Component } from 'react';
import Intro from '../components/Intro';
import Jokes from '../components/Jokes'
import './App.css'


class App extends Component {
  constructor() {
    super();
    this.state = {
      stage: null,
      display_intro: 'flex',
      display_jokes: 'none',
      jokes: {},
      jokesCategory: [],
      catValue: 'default',
      nextJoke: false
    }
    // this.handleButton = this.handleButton.bind(this);
  }

  componentDidMount() {
    try {
      fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
        .then(randomJoke => this.setState({jokes: randomJoke}))
      } catch (err) {
        alert('Jokes are not available at the moment! Please try again later.')
      }
      try {
        fetch('https://api.chucknorris.io/jokes/categories')
          .then(response => response.json())
          .then(categories => this.setState({jokesCategory: categories}))
      } catch (err) {
        alert('Jokes categories are not available at the moment! Please try again later.', err)
      }
  }

  handleRandomJoke = () => {
    try {
      if (this.state.catValue === 'default') {
        fetch('https://api.chucknorris.io/jokes/random')
          .then(response => response.json())
          .then(randomJoke => this.setState({jokes: randomJoke}))
      } else {
        fetch(`https://api.chucknorris.io/jokes/random?category=${this.state.catValue}`)
          .then(response => response.json())
          .then(catJoke => this.setState({jokes: catJoke}))
      }
      this.setState({nextJoke: !this.state.nextJoke})
      setTimeout(() => {
        return this.setState({nextJoke: false});
      }, 1000)
    } catch (err) {
          alert('Jokes are not available at the moment! Please try again later.')
    }
  }

  handleButton = () => {
    if (this.state.display_intro === 'flex') {
      this.setState({stage: 'Start'});
      setTimeout(() => {
        this.setState({ display_intro: 'none' });
        this.setState({display_jokes: 'flex'})
      }, 1000)
    } 
  }

  handleCategories = (event) => {
    this.setState({catValue: event.target.value})
  }

  render() {
    const { stage, display_intro , display_jokes, jokes, nextJoke, jokesCategory } = this.state;
    return(
      <>
        <div className='container'>
         <Intro handleButton={this.handleButton}
                display={display_intro}
                stage={stage} 
        />
        <Jokes 
          display={display_jokes} 
          jokes={jokes.value}
          randombtn={this.handleRandomJoke}
          nextJoke={nextJoke}
          category={jokesCategory}
          handleCat={this.handleCategories}
        />
        </div>
      </>
    );
  }
}

export default App;