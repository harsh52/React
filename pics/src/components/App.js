//import the React and reactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './SearchBar';

class App extends React.Component {
    onSearchSubmit(term) {
        console.log(term);
    }

    render() {
        return (<div className="ui container">
            < SearchBar onSubmit={this.onSearchSubmit} />
        </div>);
    }
}

export default App;