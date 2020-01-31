const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const URL_REGEX = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;

function validateEmail(email) {
  return EMAIL_REGEX.test(String(email).toLowerCase());
}

function validateUr(url){
  return URL_REGEX.test(String(url).toLowerCase());
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

function validateBlogForm(blogForm){
  let errorMsg = []
  if(blogForm.name.length > 120 )
    errorMsg.name = "Name cannot be longer than 120 letters."  
  if(blogForm.name.length < 2 )
    errorMsg.name = "Name is too short."
  if(blogForm.instagram.length > 120)
    errorMsg.instagram = "Instagram nick is too long."

  if(validateUr(blogForm.website))
    errorMsg.website = "Website URL is not correct."
  if(blogForm.website.length > 120)
    errorMsg.website = `${errorMsg.website} (too long)`

  if(validateUr(blogForm.facebook))
    errorMsg.facebook = "Facebook URL is not correct."
  if(blogForm.facebook.length > 120)
    errorMsg.facebook = `${errorMsg.facebook} (too long)`

  if(validateUr(blogForm.youtube))
    errorMsg.youtube = "Youtube URL is not correct."
  if(blogForm.youtube.length > 120)
    errorMsg.youtube = `${errorMsg.youtube} (too long)`


  if(!blogForm.languages.length > 0)
    errorMsg.languages = "At least one language must be given."
  if(!blogForm.countries.length > 0)
    errorMsg.countries = "At least one country must be given."
  if(blogForm.about.length > 1000)
    errorMsg.youtube = "Infos about is too long."
  if(!blogForm.instagram && !blogForm.facebook && !blogForm.youtube && !blogForm.website)
    errorMsg.all = "At least one social media or website must be given."
  return errorMsg  
}
export { validateAuthFormInput, validateAuthForm, validateBlogForm };
