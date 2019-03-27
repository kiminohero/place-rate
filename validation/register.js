const Validator = require("validator");
const isEmpty = require("./isEmpty");

const validateRegister = data => {
  let errors = {};

  data.firstname = !isEmpty(data.firstname) ? data.firstname : "";
  data.username = !isEmpty(data.username) ? data.username : "";
  data.lastname = !isEmpty(data.lastname) ? data.lastname : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";
  data.image = !isEmpty(data.image) ? data.image : "";

  if (Validator.isEmpty(data.firstname)) {
    errors.firstname = "Firstname is required";
  }

  if (!Validator.isLength(data.firstname, { min: 1, max: 30 })) {
    errors.firstname = "Firstname can be max of 30 charecters";
  }

  if (Validator.isEmpty(data.lastname)) {
    errors.lastname = "Lastname is required";
  }

  if (!Validator.isLength(data.lastname, { min: 1, max: 30 })) {
    errors.lastname = "Lastname can be maximum of 30 charecters";
  }

  if (Validator.isEmpty(data.username)) {
    errors.username = "Username is required";
  }

  if (!Validator.isLength(data.username, { min: 5, max: 20 })) {
    errors.username = "Username should be between 5 to 20 charecters";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email is required";
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = "Invalid Email";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password is required";
  }

  if (!Validator.isLength(data.password, { min: 6 })) {
    errors.password = "Password must be at least 6";
  }

  if (!Validator.isLength(data.password2, { min: 6 })) {
    errors.password2 = "Password must be at least 6";
  }
  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Password must match";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

module.exports = validateRegister;
