//import the React and reactDOM libraries
import React from 'react';
import unsplash from '../Api/unsplash';
import SearchBar from './SearchBar';

class App extends React.Component {

    state = { images: [] };


    //onSearchSubmit = (term) => {
    //     //Printing value that is get from child class "SearchBar"
    //    console.log(term);
    //    axios.get("https://api.unsplash.com/search/photos", {
    //        params: { query: term },
    //        headers: {
    //            Authorization: 'Client-ID phettcQnlkFHs-QgKFNWd4CgEpNjizTYJNZyGt8JHbo'
    //        }
    //    }
    //    ).then(response => {
    //        this.setState({ images: response.data.results });
    //        console.log(response.data.results)
    //    })
    //}

    // Uncomment above and comment below both fuction will work exactly same
    //Another way to call api and wait for resopnse "async" and "await" and assign to variable response
    onSearchSubmit = async (term) => {
        //Printing value that is get from child class "SearchBar"
        console.log(term);
        

        const response = await unsplash.get("/search/photos", {
            params: { query: term }
            
        });

        this.setState({ images: response.data.results });
        console.log(response.data.results)
    }

    render() {
        return (<div className="ui container">
            < SearchBar onSubmit={this.onSearchSubmit} />
            Found: {this.state.images.length} images
        </div>);
    }
}

export default App;