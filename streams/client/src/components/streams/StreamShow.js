import React from "react";
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

class StreamShow extends React.Component {
	componentDidMount() {
		if (!this.props.stream) this.props.fetchStream(this.props.match.params.id);
	}
	render() {
		if (!this.props.stream) return (
			<div>
				Loading Stream...
			</div>
		);
		
		return (
				<div>
					Showing:
					<h3>{this.props.stream.title}</h3>
				</div>
			);
	}
};

const mapStateToProps = (state, ownProps) => {
	return {
		stream: state.streams[ownProps.match.params.id],
	}
}

export default connect(mapStateToProps, {
	fetchStream,
})(StreamShow);
