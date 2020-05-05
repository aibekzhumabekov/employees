import React, { Component } from 'react';
import { withRouter } from "react-router";
import moment from "moment";
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie,
  } from 'recharts';
import './single.css'

class Single extends Component {

    goBack = () => {
        this.props.history.goBack();
    }

    render(){
        const {id} = this.props.match.params;
        console.log(this.props)
        const { employees } = this.props;

        let employee = {};
        for(let i=0;i<employees.length; i++){
            if(Number(id) === employees[i].id){
                employee = employees[i];
                break;
            }
        }

        let months = {};
        let days = {};
        employee.logins.forEach(login=>{
            const {date} = login;
            const month = moment(date).format('MMM');
            const day = moment(date).format('dddd');
            if(!months[month]){
                months[month] = 1
            } else {
                months[month]++
            }
            if(!days[day]){
                days[day] = 1
            } else {
                days[day]++
            }
        })
        const arr = Object.keys(months).map(month=>{
            const count = months[month];
            return {month,count}
        })

        const pieData = Object.keys(days).map(day=>{
            const count = days[day];
            return {name:day,value:count}
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
                    </ul>
                    
                    <PieChart width={400} height={400} >
                        <Pie isAnimationActive={true} data={pieData} cx={200} cy={200} outerRadius={130} fill="#82ca9d" label/>
                        <Tooltip/>
                    </PieChart>
              
                
                    <BarChart width={400} height={200} data={arr}
                                margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                        <CartesianGrid strokeDasharray="3 3"/>
                        <XAxis dataKey="month"/>
                        <YAxis/>
                        <Tooltip/>
                        <Legend />
                        <Bar dataKey="count" fill="#8884d8" />
                    </BarChart>
                
                    
                  
                    
                </div>
        )
    }
}

export default withRouter(Single)