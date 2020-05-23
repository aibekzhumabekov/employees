import React, {Component} from 'react';
import List from './components/list/List';
import Search from './components/search/Search';
import './app.scss';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { Button } from 'reactstrap';
import Single from './components/single/Single';
import Add from './components/single/Add'

class App extends Component {
    constructor(){
        console.log('constructor')
        super();
        this.state = {
            employees : [],
            isLoading: false,
            searchBy: '',
            search:'',
            selected: {}
        }
    }

    delete =(id) => {
        const employees = this.state.employees.filter(emp=>{
            if(emp.id === id){
                return false
            }
            return true
        })
        this.setState({employees})
    }

    getApiData = () => {
        this.setState({isLoading:true})
        fetch('https://raw.githubusercontent.com/maratgaip/json/master/people.json')
        .then(json=>json.json())
        .then(employees=>this.setState({employees, isLoading:false}))
    }

    componentDidMount(){
        this.getApiData();
    }

    getSearch = (e) => {
        this.setState({search:e.target.value});
    }

    selectOnChange = (searchBy) => {
        this.setState({searchBy});
    }
    setEmployee = (selected) => {
        this.setState({selected});
    }
    updateEmployee = (employee) => {
        const employees = this.state.employees.map(emp=>{
            if(emp.id === employee.id) {
                return employee
            }
            return emp
        })
        this.setState({employees});
    }

    onSave = (employee) => {
        const newEmployees = this.state.employees.map((emp)=>{
            if (emp.id === employee.id){
                return employee
            } return emp
        })
        this.setState({employees: newEmployees})
    }

    filter = () => {
        const {employees, search, searchBy} = this.state;
        const filteredEmployees = employees.filter(employee => {
            return employee[searchBy] && searchBy.length ? employee[searchBy].toLowerCase().includes(search.toLowerCase()) : true;
        })
        return filteredEmployees
    }

    render(){
        const { isLoading, search, searchBy, selected, employees } = this.state;
        
        const filteredEmployees = this.filter();
        const loader = <div className="lds-dual-ring"></div>;
        let content = isLoading ? loader : <List delete={this.delete} setEmployee={this.setEmployee} employees={filteredEmployees} />
        if(!isLoading && !filteredEmployees.length){
            content = <div className="not-found">Data Not Found</div>
        }

        return (
            <Router>
            <Switch>
                <div className="container">
                    
                    <Route path="/" exact>
                        <Button>Add Employee</Button>
                        <Add />
                        <Search searchBy={searchBy} selectOnChange={this.selectOnChange} value={search} getSearch={this.getSearch} />
                        {content}
                    </Route>
                    <Route path="/page/:page" exact>
                        <Search searchBy={searchBy} selectOnChange={this.selectOnChange} value={search} getSearch={this.getSearch} />
                        {content}
                    </Route>
                    <Route path="/employee/:id">
                        <Single updateEmployee={this.updateEmployee} employees={employees} data={selected} />
                    </Route>
                    
                </div>
            </Switch>
            </Router>
        )

    }
    
}

export default App;