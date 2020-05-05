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
            searchBy: '',
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

    selectOnChange = (e) => {
        this.setState({searchBy:e.target.value});
    }

    filter = () => {
        const {employees, search, searchBy} = this.state;
        const filteredEmployees = employees.filter(employee => {
            return searchBy.length ? employee[searchBy].toLowerCase().includes(search.toLowerCase()) : true;
        })
        return filteredEmployees
    }

    render(){
        const { isLoading, search, searchBy } = this.state;
        
        // Filtering / Searching by  
        const filteredEmployees = this.filter();
        const loader = <div className="lds-dual-ring"></div>;
        let content = isLoading ? loader : <List employees={filteredEmployees} />
        if(!isLoading && !filteredEmployees.length){
            content = <div className="not-found">Data Not Found</div>
        }

        return (
            <div className="container">
                <Search searchBy={searchBy} selectOnChange={this.selectOnChange} value={search} getSearch={this.getSearch} />
                {content}
            </div>

        )

    }
    
}

export default App;