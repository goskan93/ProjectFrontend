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
  if(blogForm.Name.length > 120 )
    errorMsg.Name = "Name cannot be longer than 120 letters."  
  if(blogForm.Name.length < 2 )
    errorMsg.Name = "Name is too short."
  if(blogForm.Instagram.length > 120)
    errorMsg.Instagram = "Instagram nick is too long."
  if(blogForm.Youtube.length > 120)
    errorMsg.Youtube = "Youtube nick is too long."
  if(blogForm.Facebook.length > 120)
    errorMsg.Facebook = "Facebook nick is too long."  
  if(validateUr(blogForm.Website))
    errorMsg.Website = "Website URL is not correct."
  if(blogForm.Website.length > 120)
    errorMsg.Website = `${errorMsg.Website} (too long)`
  if(!blogForm.Languages.length > 0)
    errorMsg.Languages = "At least one language must be given."
  if(!blogForm.Countries.length > 0)
    errorMsg.Countries = "At least one country must be given."
  if(blogForm.About.length > 1000)
    errorMsg.Youtube = "Infos about is too long."
  if(!blogForm.Instagram && !blogForm.Facebook && !blogForm.Youtube && !blogForm.Website)
    errorMsg.All = "At least one social media or website must be given."
  return errorMsg  
}
export { validateAuthFormInput, validateAuthForm, validateBlogForm };
