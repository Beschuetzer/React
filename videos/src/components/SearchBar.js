import React from "react";

export default class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchQuery: "",
		};
	}
	onFormSubmit = (e) => {
        e.preventDefault();
		console.log('this.props =', this.props);
        this.props.onSearchSubmit(this.state.searchQuery);
    }
	render() {
		return (
			<div className="search-bar">
				<form onSubmit={this.onFormSubmit} className="form">
					<div className="form__field">
						<label htmlFor="search">Search Videos:</label>
						<input
                        value={this.state.searchQuery}
							onChange={e => this.setState({searchQuery: e.target.value})}
							id="search"
							placeholder="Enter string to find videos from youtube"
						/>
					</div>
				</form>
			</div>
		);
	}
}
