import React from "react";
import AnimatedButton from "./AnimatedButton";

export default class SearchBar extends React.Component {
	constructor() {
		super();
		this.state = {term: ''};
        this.onFormSubmit = this.onFormSubmit.bind(this);
	}
    onFormSubmit(e) {
        e.preventDefault();
        this.props.onSubmit(this.state.term);
    }
	render() {
		return (
			<div className="ui segment">
				<form className="ui form" onSubmit={this.onFormSubmit}>
					<div className="field">
						<label htmlFor="search">Image Search</label>
						<input
                            value={this.state.term}
							id="search"
							className="ui left icon input loading"
							type="text"
							placeholder="Enter term to find pics for"
                            onChange={(e) => this.setState({term: e.target.value})}>
                        </input>
					</div>
					<AnimatedButton type="submit" hidden="Go!" visible="Search"/>
				</form>
			</div>
		);
	}
}
