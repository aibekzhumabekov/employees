import React from 'react';
import './search.css'

const Search = (props) => {
    const {value, searchBy, getSearch, selectOnChange} = props;
    return (
        <div>
<<<<<<< HEAD
            <input value={props.value} onChange={props.getSearch} className="search" placeholder="Search..." />
            <select  className="select">
                <option>Firstname</option>
                <option>Lastname</option>
                <option>Email</option>
                <option>City</option>
                <option>State</option>
=======
            <input value={value} onChange={getSearch} className="search" placeholder="Search..." />
            <select value={searchBy} onChange={selectOnChange} className="select">
                { !searchBy.length && <option value="">Select</option>}
                <option value="first_name">Name</option>
                <option value="last_name">Lastname</option>
                <option value="email">Email</option>
                <option value="city">City</option>
                <option value="state">State</option>
>>>>>>> c74e431bb29949412e8c733259cace298811a6bf
            </select>
        </div>
    )
}

export default Search