import React, { Component } from 'react';
import { withRouter } from "react-router";
import './single.css'

class Single extends Component {
    render(){
        const {id} = this.props.match.params;
        const { employees } = this.props;

        let employee = {};
        for(let i=0;i<employees.length; i++){
            if(id == employees[i].id){
                employee = employees[i];
                break;
            }
        }

        return (
             <div className="single">
                    <ul>
                        <li>
                            <div className="property">Id</div>
                            <div className="value">{employee.id}</div>
                        </li>
                        <li>
                            <div className="property">Name</div>
                            <div className="value">{employee.first_name}</div>
                        </li>
                        <li>
                            <div className="property">Lastname</div>
                            <div className="value">{employee.last_name}</div>
                        </li>
                        <li>
                            <div className="property">City</div>
                            <div className="value">{employee.city}</div>
                        </li>
                        <li>
                            <div className="property">State</div>
                            <div className="value">{employee.state}</div>
                        </li>
                        <li>
                            <div className="property">Email</div>
                            <div className="value">{employee.email}</div>
                        </li>
                    </ul>
                </div>
        )
    }
}

export default withRouter(Single)