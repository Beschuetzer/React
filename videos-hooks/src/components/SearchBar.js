import React from "react";
import {useState} from 'react';

const Searchbar = ({onSearchSubmit}) => {
	const [searchQuery, setSearchQuery] = useState("");

	const onFormSubmit = (e) => {
		e.preventDefault();
        onSearchSubmit(searchQuery);
	}
	return (
		<div className="search-bar">
			<form onSubmit={onFormSubmit} className="form">
				<div className="form__field">
					<label htmlFor="search">Search Videos:</label>
					<input
					value={searchQuery}
						onChange={e => setSearchQuery(e.target.value)}
						id="search"
						placeholder="Enter string to find videos from youtube"
					/>
				</div>
			</form>
		</div>
	);
}

export default Searchbar;
