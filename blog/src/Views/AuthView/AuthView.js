import React, { useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import {
  authFormInputs,
  authFormInputsState,
  authFormActionTypes
} from "../../Utils/authForm";
import AuthForm from "./AuthForm";
import {
  validateAuthFormInput,
  validateAuthForm
} from "../../Utils/validation";
import { login } from "../../Store/Modules/authModule";
import { ApiUrlsDict, sendWebRequest } from "../../Utils/WebAPI";
import { darkpink } from "../../Utils/colors";
import { notifySuccess, notifyError } from "../../Utils/notifications";
import { PATHS } from "../../Utils/routes";
import CustomButton from "../../Components/CustomButton";

function AuthView(props) {
  const [authForm, onChangeForm] = useState(authFormInputsState);
  const [formInputs, onChangeFormInputs] = useState(authFormInputs);
  const [errorMsg, showErrorMsg] = useState("");

  const onChangeInput = (fieldName, value) => {
    onChangeForm({ ...authForm, [fieldName]: value });
  };

  const onBlurInput = fieldName => {
    let hasError = validateAuthFormInput(fieldName, authForm);
    const formInputUpdated = formInputs.map(x =>
      x.fieldName === fieldName ? { ...x, error: hasError } : x
    );
    onChangeFormInputs(formInputUpdated);
  };

  const onChangeTypeAuth = authType => {
    onChangeInput("actionType", authType);
    //change if is input visible
    let options;
    if (authType === authFormActionTypes.SIGNIN) options = [true, true, true];
    if (authType === authFormActionTypes.LOGIN) options = [true, true, false];
    if (authType === authFormActionTypes.RESET_PASS)
      options = [true, false, false];
    if (options) {
      const formInputUpdated = formInputs.map((item, index) => {
        return { ...item, isVisible: options[index] };
      });
      onChangeFormInputs(formInputUpdated);
    }
  };

  const onSubmitForm = async () => {
    let errorTxt = validateAuthForm(authForm);
    showErrorMsg(errorTxt);
    if (!errorTxt) {
      let objectToSend = {};
      let urlName = "";
      objectToSend.email = authForm.email;
      if (authForm.actionType === authFormActionTypes.LOGIN) {
        objectToSend.password = authForm.password;
        urlName = "Login";
      }
      if (authForm.actionType === authFormActionTypes.SIGNIN) {
        objectToSend.password1 = authForm.password;
        objectToSend.password2 = authForm.password2;
        urlName = "Register";
      }
      try{
        const response = await sendWebRequest(
          ApiUrlsDict[urlName],
          "POST",
          objectToSend,
          {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
          }
        );
        //login
        if (response.Message === "OK" && response.result.key) {
          props.dispatch(login({ token: response.result.key }));
          props.history.push(PATHS.HOME);
          notifySuccess("Login successfully!");
        } else {
          notifyError(response.result.message);
          if (response.result.status === 400) {
            showErrorMsg("Email or password incorrect.");
          }
        }
      }catch(e){
        notifyError("Opps! There is a problem with connection.")
      }
    }
  };

  return (
    // <form action={onSubmitForm}>
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item xs={2} md={3} />
      <Grid item xs={8} md={4}>
        {errorMsg && errorMsg.split("\n").map((err, i) => (
          <span style={{ color: darkpink, fontSize: 16 }} key={i}>{err}</span>
         ))}
        <AuthForm
          onChangeInput={(fieldName, value) => onChangeInput(fieldName, value)}
          onBlurInput={fieldName => onBlurInput(fieldName)}
          formInputs={formInputs}
          form={authForm}
        />
        <CustomButton variant="contained" onClick={onSubmitForm}>
          {authForm.actionType}
        </CustomButton>
        {Object.keys(authFormActionTypes).map((key, i) => {
          return (
            authForm.actionType !== authFormActionTypes[key] && (
              <span
                key={i}
                style={{ cursor: "pointer", marginLeft: 10, fontSize: 14 }}
                onClick={() => onChangeTypeAuth(authFormActionTypes[key])}
              >
                {authFormActionTypes[key]}
              </span>
            )
          );
        })}
      </Grid>
      <Grid item xs={2} md={3} />
    </Grid>
    // </form>
  );
}

function mapStateToProps({ auth }) {
  return {
    token: auth.token
  };
}
export default connect(mapStateToProps)(withRouter(AuthView));
