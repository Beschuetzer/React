import React from 'react';
import { connect } from 'react-redux';
import { editStream, fetchStream } from '../../actions';
import StreamForm from './StreamForm';


class StreamEdit extends React.Component {
    componentDidMount() {
        if (!this.props.stream) this.props.fetchStream(this.props.match.params.id);
    }
    onSubmit = (formValues) => {
        this.props.editStream(this.props.match.params.id, {...formValues, userId: this.props.userId});
    }
    render() {
        if (!this.props.stream) {
            return (
                <div className="ui loading">Loading...</div>
            );
        }
        else if (this.props.userId !== this.props.stream.userId) {
            return (
                <div>You are not allowedd to edit this stream</div>
            )
        }
        else {
            return (
                <div>
                    <h3>Edit Stream:</h3>
                    <StreamForm 
                        initialValues={{
                            title: this.props.stream.title,
                            description: this.props.stream.description,
                    }} 
                        onSubmit={this.onSubmit}
                    />
                </div>
            );
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id],
        userId: state.auth.userId,
    }
}

export default connect(mapStateToProps, {
    editStream,
    fetchStream,
})(StreamEdit);

