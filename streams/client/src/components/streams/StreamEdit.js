import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { editStream, fetchStream } from '../../actions';
import StreamForm from './StreamForm';
import history from '../../history';


class StreamEdit extends React.Component {
    componentDidMount() {
        if (!this.props.stream) this.props.fetchStream(this.props.match.params.id);
    }
    onSubmit = (formValues) => {
        this.props.editStream(this.props.match.params.id, formValues);
    }
    render() {
        if (!this.props.stream) {
            return (
                <div className="ui loading">Loading...</div>
            );
        }
        else if (this.props.userId !== this.props.stream.userId) {
            setTimeout(() => {
                history.push('/');
            }, 3000);

            return (
                <div>
                    <h3>Not Allowed</h3>
                    <p>You are not allowed to edit this stream.</p>
                    <p>Returning to list of streams...</p>
                </div>
            )
        }
        else {
            return (
                <div>
                    <h3>Edit Stream:</h3>
                    <StreamForm 
                        initialValues={_.pick(this.props.stream, 'title', 'description')} 
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

