import React from 'react';
import './search.css'

const Search = (props) => {
    return (
        <div>
            <input value={props.value} onChange={props.getSearch} className="search" placeholder="Search..." />
            <select  className="select">
                <option>Firstname</option>
                <option>Lastname</option>
                <option>Email</option>
                <option>City</option>
                <option>State</option>
            </select>
        </div>
    )
}

export default Search