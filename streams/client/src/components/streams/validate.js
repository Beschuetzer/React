
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

export default validate;