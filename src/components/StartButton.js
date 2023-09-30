import React from 'react';

const StartButton = (props) => {
    return(
        <button className='btn-start grow'
                onClick={props.handleClick}
        >
            Start
        </button>
    );
}

export default StartButton;