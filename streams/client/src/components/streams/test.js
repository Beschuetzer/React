import React from 'react';
import { Field, reduxForm } from 'redux-form';

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
    onFormSubmit ({title}) {
      
    }
    render() {
        return (
            //this.props.handleSubmit is a function from redux-form that you pass an onSubmit handler into.  It calls e.preventDefault() and passes each <Field>'s name and input value prop in as a key-value pair
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className='ui form'>
                {
                  //Any unknown props passed to <Field> get passed to the component obj passed into compenent=
                }
                <Field name="title" component={this.renderInput} label='labelStringHere'/>
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
        errors.title = `titles must be at least minTitleLength characters long.`
    }

    return errors;
}

export default reduxForm({
    //'form' must be exactly as written;  'streamCreate' is the key that is used in the store under form object
    form: 'streamCreate',
    //the validate function is used to validate inputs and is sent as .meta property object to the component={....} renderer
   validate,
})(StreamCreate);