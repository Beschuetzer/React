import React from "react";
import SeasonDisplay from "./SeasonDisplay";

const App = () => {
	window.navigator.geolocation.getCurrentPosition(
		function (position) {
			console.log("position =", position);
		},
		(err) => {
			console.log("err =", err);
		},
	);

	return <SeasonDisplay></SeasonDisplay>;
};

export default App;
