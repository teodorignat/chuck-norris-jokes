import React from 'react';

const CatSelect = (props) => {
    return(
        <select name="category" id="category" className='grow' onChange={props.handleCat}>
            <option value="default">Random category</option>
            {
                props.category.map((cat, i) => {
                    return(
                        <option key={i} value={cat} >
                            {cat}
                        </option>
                    );
                })
            }
        </select>
    );
}

export default CatSelect; 