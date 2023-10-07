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
      searchJokes: false,
      newQueryJokes: [],
      queryJokes: [],
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
        return fetch(`https://api.chucknorris.io/jokes/search?query=${this.state.searchfield}`)
          .then(response => response.json())
          .then(searchJoke => {
            this.setState({searchJokes: searchJoke});
            return searchJoke;
        })
      } catch (error) {
        alert('Jokes are not available at the moment! Please try again later.');
      }
    }

    handleSearchButton = () => {
      const { searchfield, countResult, queryJokes} = this.state;
    
      if (searchfield.length > 0) {
        this.fetchSearchJokes().then(searchJokes => {
          if (searchJokes && searchJokes.total > 0) {
            const newQueryJokes = [...queryJokes, ...searchJokes.result];
            this.setState({
              jokes: newQueryJokes[Math.floor(Math.random() * searchJokes.total)],
              queryJokes: [],
              countResult: countResult + 1
            });
          } else if (searchJokes.total === 0) {
            this.setState({ jokes: { value: 'There are no jokes with your word/s included.' } });
          } else {
            this.setState({ jokes: { value: 'Press the button one more time, Chuck Norris gets the answer first.' } });
          }
    
          this.setState({ nextJoke: !this.state.nextJoke });
          setTimeout(() => {
            return this.setState({ nextJoke: false });
          }, 1000);
        });
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
    const { stage, display_intro , display_jokes, jokes, nextJoke, jokesCategory, searchJokes, searchfield, queryJokes } = this.state;
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
          searchfield={searchfield}
          search={this.handleSearch}
          searchJokes={searchJokes}
          searchButton={this.handleSearchButton}
          queryJokes={queryJokes}
        />
        </div>
      </>
    );
  }
}

export default App;