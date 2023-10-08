import React from 'react';
import jokeIcon from '../img/joke-icon.png'

const Joke = (props) => {
    return (
        <div className='jokes' style={{animation:(props.nextJoke === true) ? 'rotate 1s' : 'none'}}>
            <div className='joke'>
                <img 
                    className='jokeIcon' 
                    src={jokeIcon} 
                    alt="Chuck Norris profile icon" 
                />
                <p>
                    { props.jokes.value }
                </p>
            </div>
        </div>
    );
}

export default Joke;