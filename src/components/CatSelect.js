import React from 'react';

const CatSelect = (props) => {
    return(
        <select name="category" id="category" className='grow' onChange={props.handleCat}>
            <option style={{backgroundColor: 'black'}} value="default">Any category</option>
            {
                props.category.map((cat, i) => {
                    return(
                        <option key={i} style={{backgroundColor: 'black'}} value={cat} >
                            {cat.toUpperCase()}
                        </option>
                    );
                })
            }
        </select>
    );
}

export default CatSelect; 