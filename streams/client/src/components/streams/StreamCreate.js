import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {connect} from 'react-redux';
import {createStream} from '../../actions';

class StreamCreate extends React.Component {
    renderError({error, touched}) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">
                        {error}
                    </div>
                </div>
            );
        }
        return null;
    }
    renderInput = ({input, label, meta}) => {
        return (
            <div className={`field ${meta.error && meta.touched? 'error' : ''}`}>
                <label>{label}</label>
                <input {...input} autoComplete="off"/>
                {this.renderError(meta)}
            </div>
        );
    }

    onSubmit = (formValues) => {
        console.log('formValues =', formValues);
        this.props.createStream(formValues);
    }

    render() {
        console.log('this.props =', this.props);
        return (
            //this.props.handleSubmit is a function from redux-form that you pass an onSubmit handler into.  It calls e.preventDefault() and passes each <Field>'s name and input value prop in as a key-value pair
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name="title" component={this.renderInput}label="Enter Title: "/>
                <Field name="description" component={this.renderInput} label="Enter Description"/>
                <button className="ui button primary">Submit</button>
            </form>
        );
    }
}

const validate = (formValues) => {
    //this function is used to validate inputs;  returning an empty obj means no errors, otherwise specify a key (must be same as the name property on the Field tag and a message to display in that case as string)

    const errors = {};
    const minTitleLength = 8;
    if (!formValues.title) {
        errors.title = 'You must enter a title'
    }
    else if (formValues.title.length < minTitleLength) {
        errors.title = `Titles must be at least ${minTitleLength} characters long.`
    }

    if (!formValues.description) {
        errors.description = 'You must enter a description'
    }
    else if (formValues.description.length < minTitleLength) {
        errors.description = `Descriptions must be at least ${minTitleLength} characters long.`
    }
    
    return errors;
}

const formWrapped = reduxForm({
    form: 'streamCreate',
    validate,
})(StreamCreate);

export default connect(null, {createStream})(formWrapped);