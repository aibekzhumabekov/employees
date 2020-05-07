import React, { Component } from 'react';
import { withRouter } from "react-router";
import moment from 'moment'
import {BarChart, Bar, XAxis, CartesianGrid, Tooltip} from 'recharts';

import './single.css'

class Single extends Component {

    goBack = () => {
        this.props.history.goBack();
    }

    render(){
        const {id} = this.props.match.params;
        const { employees } = this.props;

        let employee = {};
        for(let i=0;i<employees.length; i++){
            if(Number(id) === employees[i].id){
                employee = employees[i];
                break;
            }
        }



       const months = {}
       
       employee.logins.map(login=>{
           const month = moment(login.date).format("MMMM")

           if(months[month]){
               months[month]++
           }else{
               months[month]=1
           }
           return months

       })
        const monthsChart = Object.keys(months).map(month=>{
        const count = months[month]
         return {month, count}
        })
        

        

        return (
             <div className="single">
                 <div onClick={this.goBack}>Go Back > </div>
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
                        <li>Logins:</li>  <BarChart width={600} height={300} data={monthsChart}
                            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="month"/>
                    <Tooltip/>
                    <Bar dataKey="count" fill="#8884d8" />
                    </BarChart>
                      
                       
                    </ul>

                    

                </div>
        )
    }
}

export default withRouter(Single)