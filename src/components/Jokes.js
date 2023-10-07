import React, { Component } from 'react';
import Joke from './Joke';
import CatSelect from './CatSelect';
import SearchBar from './SearchBar';
import jokesimg from '../img/jokesimg.png';

class Jokes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display_img: 'none',
            categories: [],
        }
    }

    render() {
        return (
            <>
                <div className='jokes-wrapper' style={{display: this.props.display}}>
                    <Joke 
                        nextJoke={this.props.nextJoke}
                        searchJokes={this.props.searchJokes}
                        jokes={this.props.jokes}
                        queryJokes={this.props.queryJokes}
                    />
                    <img
                        className='jokesimg' 
                        src={jokesimg}
                        alt="cowboy chuck norris" 
                    />
                    <div className='button-box'>
                        <SearchBar 
                            search={this.props.search} 
                            handleButton={this.props.searchButton} 
                        />
                        <button 
                            className='random-btn grow'
                            onClick={this.props.randombtn}
                        >
                            Random Joke
                        </button>   
                        <CatSelect 
                            category={this.props.category} 
                            handleCat={this.props.handleCat} 
                        />
                    </div>
                </div>
            </>
        );
    }
};

export default Jokes;