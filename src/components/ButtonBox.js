import React from 'react';
import SearchBar from './SearchBar';
import CatSelect from './CatSelect';

const ButtonBox = (props) => {
    return (
        <div className='button-wrapper'>
            <div className='button-box'>
                <SearchBar 
                    search={props.search} 
                    handleButton={props.handleButton} 
                />
                <button 
                    className='random-btn grow'
                    onClick={props.randombtn}
                >
                    Random Joke
                </button>   
                <CatSelect 
                    category={props.category} 
                    handleCat={props.handleCat} 
                />
            </div>
         </div>
    );
}

export default ButtonBox;
