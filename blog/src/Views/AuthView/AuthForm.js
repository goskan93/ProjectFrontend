import React from "react";
import { TextInput } from "../../Components";

function AuthForm(props) {
  const { onChangeInput, onBlurInput, formInputs, form } = props;
  return (
    <>
      {formInputs.map((input, index) => {
        if (input.isVisible) {
          return (
            <TextInput
              key={index}
              label={input.label}
              value={form[input.fieldName]}
              onChange={value => onChangeInput(input.fieldName, value)}
              onBlur={value => onBlurInput(input.fieldName)}
              error={input.error}
              helperText={input.error ? input.helperText : ""}
              {...input.otherProps}
            />
          );
        } else {
          return <></>;
        }
      })}
    </>
  );
}

export default AuthForm;
