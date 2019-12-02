export const authFormActionTypes = {
  LOGIN: "Login",
  SIGNIN: "Sign In"
  // RESET_PASS: "Reset Password"
};
  
export const authFormInputsState = {
  email: "",
  password: "",
  password2: "",
  actionType: authFormActionTypes.LOGIN
};
export const authFormInputs = [
  {
    label: "Email",
    fieldName: "email",
    error: false,
    helperText: ["", "Email is invalid."],
    otherProps: { type: "email" },
    isVisible: true
  },
  {
    label: "Password",
    fieldName: "password",
    error: false,
    helperText: ["", "Password cannot be empty."],
    otherProps: { type: "password" },
    isVisible: true
  },
  {
    label: "Repeat Password",
    fieldName: "password2",
    error: false,
    helperText: ["", "Passwords must be the same."],
    otherProps: { type: "password" },
    isVisible: false
  }
];
  