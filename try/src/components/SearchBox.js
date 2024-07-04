import React from 'react';

const SearchBox=({searchfield,searchChange})=>
    {
        return(
            <div className="tc">
            <input className="pa3"
            type="search" 
            placeholder="Search"
            onChange={searchChange}
            />
            </div>

        );
    }
export default SearchBox;