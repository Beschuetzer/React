import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import validate from './validate';
import { editStream } from '../../actions';

const StreamEdit = (props) => {
    console.log('props =', props);
    return (
        <div>
            <h4>Edit Stream</h4>
            {props.match.params.id}
        </div>
    );
}

const mapStateToProps = (state, ownProps) => {

}

const wrappedForm = reduxForm({
    form: 'StreamEdit',
    validate,
})(StreamEdit);

export default connect(mapStateToProps, {
    editStream
})(wrappedForm);

