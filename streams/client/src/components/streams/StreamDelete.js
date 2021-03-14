import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

class StreamDelete extends React.Component {
    componentDidMount() {
        console.log('this.props.stream =', this.props.stream);
        if (!this.props.stream) this.props.fetchStream(this.props.match.params.id);
    }
    render() {
        if (!this.props.stream) return <div>Loading</div>
        return (
            <div>
                Deleting...
               <h4>{this.props.stream.title}</h4> 
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log('ownProps =', ownProps);
    return {
        stream: state.streams[ownProps.match.params.id],
    }
}

export default connect(mapStateToProps, {
    fetchStream,
})(StreamDelete);