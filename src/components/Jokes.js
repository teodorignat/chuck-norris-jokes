import React, { Component } from 'react';
import jokesimg from '../img/jokesimg.png'

class Jokes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display_img: 'none'
        }
    }
    render() {
        return (
            <>
                <div className='jokes-wrapper' style={{display: this.props.display}}>
                    <p style={{animation:(this.props.nextJoke === true) ? 'rotate 0.5s' : 'none'}}>
                        {this.props.jokes}
                    </p>
                    <img
                        className='jokesimg' 
                        src={jokesimg}
                        alt="cowboy chuck norris" 
                    />
                    <button 
                        className='random-btn grow'
                        onClick={this.props.randombtn}
                    >
                        Random Joke
                    </button>   
                </div>
            </>
        );
    }
};

export default Jokes;