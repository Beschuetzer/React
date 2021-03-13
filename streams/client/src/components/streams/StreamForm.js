import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import validate from './validate';



class StreamForm extends React.Component {
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

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
        <Field name="title" component={this.renderInput}label="Enter Title: "/>
        <Field name="description" component={this.renderInput} label="Enter Description"/>
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const formWrapped = reduxForm({
  form: "this.props.form",
  validate,
})(StreamForm);

export default connect(null, {

})(formWrapped);