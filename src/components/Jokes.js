import React, { Component } from 'react';
import Joke from './Joke';
import ButtonBox from './ButtonBox';
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
                    <div className='jokes-content'>
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
                    </div>
                    <ButtonBox
                        search={this.props.search} 
                        handleButton={this.props.searchButton}
                        randombtn={this.props.randombtn}
                        category={this.props.category} 
                        handleCat={this.props.handleCat} 
                    />
                </div>
            </>
        );
    }
};

export default Jokes;