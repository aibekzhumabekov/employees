import React, { Component } from 'react';
import './list.css'
import { Link }  from 'react-router-dom';

class List extends Component {
    render(){
        const { employees } = this.props;
        return (
                <div>
                <div className="list">
                    <div className="row header">
                        <div className="cell sm">#</div>
                        <div className="cell">Fullname</div>
                        <div className="cell">Email</div>
                        <div className="cell">City</div>
                        <div className="cell">State</div>
                    </div>
                    <div className="content">
                        {
                            employees.map((employee,ind)=>{
                                const { id, first_name, last_name, email, city, state } = employee;
                                return (
                                <Link key={id} className="row" to={`/employee/${id}`}>
                                    <div className="cell sm">{ind+1}</div>
                                    <div className="cell">{first_name} {last_name}</div>
                                    <div title={email} className="cell">{email}</div>
                                    <div className="cell">{city}</div>
                                    <div className="cell">{state}</div>
                                </Link>
                                )
                            })
                        }
                    </div>
                </div>
                </div>
        )
    }
}

export default List