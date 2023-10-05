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
      searchJokes: { result: [{value: 'Only Chuck Norris can get the answer from first try. Press the button one more time.'}]},
      searchfield: '',
      results: false,
      countResult: 0,
      nextJoke: false
    }
  }

  componentDidMount() {
    try {
      fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
        .then(randomJoke => this.setState({jokes: randomJoke}))
      } catch (err) {
        alert('Jokes are not available at the moment! Please try again later.');
      }
      try {
        fetch('https://api.chucknorris.io/jokes/categories')
          .then(response => response.json())
          .then(categories => this.setState({jokesCategory: categories}))
      } catch (err) {
        alert('Jokes categories are not available at the moment! Please try again later.', err);
      }
    }
    
    handleCategories = (event) => {
      this.setState({catValue: event.target.value});
    }
  
    handleSearch = (event) => {
      this.setState({searchfield: event.target.value});
    }

    fetchRandJoke = () => {
      try {
        fetch('https://api.chucknorris.io/jokes/random')
          .then(response => response.json())
          .then(randomJoke => this.setState({jokes: randomJoke}))
      } catch (error) {
        alert('Jokes are not available at the moment! Please try again later.');
      }
    }

    fetchCatJoke = () => {
      try {
        fetch(`https://api.chucknorris.io/jokes/random?category=${this.state.catValue}`)
          .then(response => response.json())
          .then(catJoke => this.setState({jokes: catJoke}))
      } catch (error) {
        alert('Jokes are not available at the moment! Please try again later.');
      }
    }

    fetchSearchJokes = () => {
      try {
        fetch(`https://api.chucknorris.io/jokes/search?query=${this.state.searchfield}`)
          .then(response => response.json())
          .then(searchJoke => this.setState({searchJokes: searchJoke}))
      } catch (error) {
        alert('Jokes are not available at the moment! Please try again later.');
      }
    }

    handleSearchButton = () => {
      const { searchfield, searchJokes, countResult, jokes, results } = this.state;
      try {
        if (searchfield.length > 0) {
          this.fetchSearchJokes();
          this.setState({results: searchJokes.total});
          this.setState({countResult: countResult + 1});
          this.setState({jokes: searchJokes.result[countResult]});
          if (!jokes) {
            this.setState({jokes: searchJokes.value});
          }
        }
        if (results === 0) {
          setTimeout(() => {
            this.setState({jokes: {value: 'Chuck Norris has no jokes with these letters.'}})
            this.setState({results: searchJokes.total})
          }, 500)
        }
        this.setState({nextJoke: !this.state.nextJoke})
        setTimeout(() => {
          return this.setState({nextJoke: false});
        }, 1000)
        console.log(results);
        
      } catch (error) {
        alert(`Chuck Norris is BUSY right now! Try again!`);
        console.error(error);
      }
    }

    handleRandomJoke = () => {
    try {
      const { catValue } = this.state;
        if (catValue === 'default') {
          this.fetchRandJoke();
        } else {
          this.fetchCatJoke();
        } 
        this.setState({nextJoke: !this.state.nextJoke})
        setTimeout(() => {
          return this.setState({nextJoke: false});
        }, 1000)
    } catch (err) {
          alert('Jokes are not available at the moment! Please try again later.');
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
          jokes={jokes} 
          randombtn={this.handleRandomJoke}
          nextJoke={nextJoke}
          category={jokesCategory}
          handleCat={this.handleCategories}
          search={this.handleSearch}
          searchButton={this.handleSearchButton}
        />
        </div>
      </>
    );
  }
}

export default App;