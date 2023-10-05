import React, { Component } from 'react';
import CatSelect from './CatSelect';
import SearchBar from './SearchBar'
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
                    <div className='jokes' style={{animation:(this.props.nextJoke === true) ? 'rotate 1s' : 'none'}}>
                        <div className='joke'>
                            <p>
                                {this.props.jokes ? this.props.jokes.value : 'Chuck Norris has no jokes with these letters. Sorry!'}
                                
                            </p>    
                        </div>
                        <div className='round-div'></div>
                        <div className='round-div2'></div>
                    </div>
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