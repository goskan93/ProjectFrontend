const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function validateEmail(email) {
  return EMAIL_REGEX.test(String(email).toLowerCase());
}

function validateAuthFormInput(fieldName, authForm) {
  let hasError = false;
  if (fieldName === "email") hasError = !validateEmail(authForm[fieldName]);
  if (fieldName === "password") {
    if (authForm[fieldName]) {
      hasError = false;
    } else hasError = true;
  }
  if (fieldName === "password2") {
    if (authForm[fieldName] === authForm.password) {
      hasError = false;
    } else hasError = true;
  }
  return hasError;
}

function validateAuthForm(authForm) {
  let errorMsg = "";
  if (validateAuthFormInput("email", authForm))
    errorMsg += "\nGiven email is invalid.";
  if (authForm.actionType !== "Reset Password")
    if (validateAuthFormInput("password", authForm))
      errorMsg += "\nPassword cannot be empty.";
  if (authForm.actionType === "Sign In")
    if (validateAuthFormInput("password2", authForm))
      errorMsg += "\nPasswords must be the same.";
  return errorMsg;
}

export { validateAuthFormInput, validateAuthForm };
