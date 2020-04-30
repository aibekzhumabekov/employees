import React, {Component} from 'react';
import List from './components/list/List';
import Search from './components/search/Search';
import './app.css'

class App extends Component {
    constructor(){
        console.log('constructor')
        super();
        this.state = {
            employees : [],
            isLoading: false,
            search:''
        }
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

    render(){
        const { employees, isLoading, search } = this.state;
        
        const filteredEmployees = employees.filter(employee => {
            const fFirst = employee.first_name.toLowerCase().includes(search.toLowerCase());
            const fLast = employee.last_name.toLowerCase().includes(search.toLowerCase());
            return fFirst || fLast
        })

        const loader = <div className="lds-dual-ring"></div>;
        let content = isLoading ? loader : <List employees={filteredEmployees} />
        if(!isLoading && !filteredEmployees.length){
            content = <div className="not-found">Data Not Found</div>
        }
        return (
            <div className="container">
                <Search value={search} getSearch={this.getSearch} />
                {content}
            </div>
            
        )

    }
    
}

export default App;