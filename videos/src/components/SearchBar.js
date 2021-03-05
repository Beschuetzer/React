import React from "react";

export default class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchQuery: "dfd",
		};
	}
	onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onFormSubmit(this.state.searchQuery);
    }
	render() {
		return (
			<div className="ui segment search-bar">
				<form onSubmit={this.onFormSubmit} className="ui form">
					<div className="field">
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
