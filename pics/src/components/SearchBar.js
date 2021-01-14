//import the React and reactDOM libraries
import React from 'react';

class SearchBar extends React.Component {
	state = {term : ''}

	//This is prevent the app to automatically submit the form.
	// And we are using "= (event) =>" to avoid Cannot read property 'state' of undefined
	onFormSubmit = (event) => {
		event.preventDefault();
		//console.log(this.state.term);
		this.props.onSubmit(this.state.term)
	}
	render() {
		return (
			<div className="ui segment">
				<form onSubmit={ this.onFormSubmit} className="ui form">
						<div className="field">
							<label> Image Search </label>
							<input type="text"
								value={this.state.term}
								onChange={e => this.setState({ term: e.target.value })} />
						</div>
					</form>
				</div>
			);
	}
}

export default SearchBar;
