import React, { Fragment } from "react";
import { TextInput } from "../../Components";

function AuthForm(props) {
  const { onChangeInput, onBlurInput, formInputs, form } = props;
  return (
    <>
      {formInputs.map((input, index) => {
        return (
          <Fragment key={index} >      
            {input.isVisible &&
              <TextInput
                label={input.label}
                value={form[input.fieldName]}
                onChange={value => onChangeInput(input.fieldName, value)}
                onBlur={value => onBlurInput(input.fieldName)}
                error={input.error}
                helperText={input.error ? input.helperText : ""}
                {...input.otherProps}
              />
            }
          </Fragment>
        );      
      })}
    </>
  );
}

export default AuthForm;
