import React from "react";
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';
import flv from 'flv.js';

class StreamShow extends React.Component {
	constructor(props) {
		super(props);
		this.videoRef = React.createRef();
	}
	componentDidMount() {
		const { id } = this.props.match.params;

		if (!this.props.stream) {
			this.props.fetchStream(id);
		}
		this.buildPlayer();		
	}

	componentDidUpdate() {
		this.buildPlayer();
	}

	componentWillUnmount() {
		//clean up the stream so that the feed is removed when navigating away
		this.flvPlayer.destroy();
	}
	buildPlayer() {
		if (this.flvPlayer || !this.props.stream) return;
		const { id } = this.props.match.params;
		this.flvPlayer = flv.createPlayer({
			type: 'flv',
			url: `http://localhost:8000/live/${id}.flv`
		});
		console.log('this.flvPlayer =', this.flvPlayer);
		this.flvPlayer.attachMediaElement(this.videoRef.current);
		this.flvPlayer.load();
	}

	render() {
		if (!this.props.stream) return (
			<div>
				Loading Stream...
			</div>
		);
		const {title, description} = this.props.stream;
		return (
				<div>
					<video ref={this.videoRef} style={{width: "100%"}} controls/>
					<h1>{title}</h1>
					<h5>{description}</h5>
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
