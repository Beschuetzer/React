import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import validate from './validate';
import { editStream, fetchStream } from '../../actions';


class StreamEdit extends React.Component {
    componentDidMount() {
        if (!this.props.stream) this.props.fetchStream(this.props.match.params.id);
    }
    render() {
        if (!this.props.stream) return <div className="ui loading"></div>
        else {
            return (
                <div>
                    <h4>Edit Stream</h4>
                    {this.props.stream.title}
                </div>
            );
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id],
    }
}

const wrappedForm = reduxForm({
    form: 'StreamEdit',
    validate,
})(StreamEdit);

export default connect(mapStateToProps, {
    editStream,
    fetchStream
})(wrappedForm);

