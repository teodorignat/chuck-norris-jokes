import React from 'react';
import introLogo from '../img/intro.png'
import StartButton from './StartButton'

const Intro = (props) => {
    return(
        <>
        <div className='intro-wrapper' style={{display: props.display, animation: (props.stage === 'Start') ? ('fade-out 1s') : 'none'}}> 
            <h1 className='appTitle'>Tell me a joke, Chuck!</h1>
            <img 
            className='introLogo' 
            src={introLogo} 
            alt="Chuck Norris intro" 
            />
            <StartButton handleClick={props.handleButton} />
        </div>
        </>
    );
}

export default Intro;