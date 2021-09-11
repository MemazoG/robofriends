import React from 'react';

const SearchBox = ({searchChange}) => {
    return (
        <div className="pa2">
            <input
                className="pa3 ba b--green bg-lightest-blue"
                type="search"
                placeholder="search robots"
                //onChange is an event from input tag. Triggers searchChange when there is a change in the searchbar
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;