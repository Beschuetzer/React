import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {connect} from 'react-redux';
import {createStream} from '../../actions';
import validate from './validate';

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



const formWrapped = reduxForm({
    form: 'streamCreate',
    validate,
})(StreamCreate);

export default connect(null, {createStream})(formWrapped);