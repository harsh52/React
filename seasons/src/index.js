//import the React and reactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';


//Create a react component

class App extends React.Component {

   
    constructor(props) {
        super(props)
        //This is only time we directly use assign operator to this.state
        this.state = { lat: null, errorMessage: '' };
         
        
    }
    
    // We can also use this instead of constructor
    // state = { lat: null, errorMessage: '' };

    // Every time we need to wait for some input we mainly put it inside it
    // into componentDidMount() method we can also put inside constructor
    // but it community convencion to put inside it.
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({ lat: position.coords.latitude });
            },
            err => {
                this.setState({ errorMessage: err.message })
            }
        );
    }

    //We have to define render method!(Always compulsary for react)
    render() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div> Error: {this.state.errorMessage}</div>;  
        }

        if (!this.state.errorMessage && this.state.lat) {
            //return <div>Latitude: {this.state.lat}</div>;
            return <SeasonDisplay lat={this.state.lat}/>
        }

        return <div> Loading.. </div>;
}
}

//Take a eact component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector("#root")
);