import React from 'react';

const Joke = (props) => {
    return (
        <div className='jokes' style={{animation:(props.nextJoke === true) ? 'rotate 1s' : 'none'}}>
            <div className='joke'>
                <p>
                    { props.jokes.value }
                </p>
            </div>
            <div className='round-div'></div>
            <div className='round-div2'></div>
        </div>
    );
}

export default Joke;