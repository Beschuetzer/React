import React from "react";
import AnimatedButton from "./AnimatedButton";

export default class SearchBar extends React.Component {
	constructor() {
		super();
		this.state = {};
	}
	render() {
		return (
			<div className="ui segment" style={{ marginTop: "1rem" }}>
				<form className="ui form" method="GET" action="">
					<div className="field">
						<label for="search">Image Search</label>
						<input
							id="search"
							className="ui left icon input loading"
							type="text"
							placeholder="Enter term to find pics for"></input>
					</div>
					<AnimatedButton type="submit" hidden="Go!" visible="Search"/>
				</form>
			</div>
		);
	}
}
