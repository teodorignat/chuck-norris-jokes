import React from 'react';
import searchLogo from '../img/searchLogo.png';

const SearchBar = (props) => {
    return(
        <>
            <div className='search'>
                <input 
                    className='searchBar grow'
                    type="search"
                    placeholder='Search jokes about...'
                    onChange={props.search}
                />
                <button 
                    className='searchButton grow'
                    onClick={props.handleButton}
                >  
                    <img className='searchLogo' src={searchLogo} alt="Search icon" />
                </button>
            </div>
        </>
    );
}

export default SearchBar;