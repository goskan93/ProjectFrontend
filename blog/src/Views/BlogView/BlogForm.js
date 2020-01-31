import React from "react";
import Grid from "@material-ui/core/Grid";
import {
  TextInput,
  SelectInput,
  CheckBoxInput,
  ImageUpload
} from "../../Components";


function BlogForm(props) {
  const { formInput, form, onChangeInput, onImageChange } = props;
  return (
    <>
      {formInput.map((input, index) => {
        if (input.inputType === "TextInput") {
          return (
            <TextInput
              key={index}
              label={input.label}
              value={form[input.fieldName]}
              onChange={onChangeInput(input.fieldName)}
              // onBlur={onBlurInput(input.fieldName)}
              error={input.error}
              helperText={input.helperText}
              {...input.otherProps}
            />
          );
        } else if (input.inputType === "SelectInput") {
          return (
            <SelectInput
              key={index}
              options={input.options}   
              value={form[input.fieldName]}           
              onChange={onChangeInput(input.fieldName)}
              helperText={input.helperText}      
              error={input.error}        
              {...input.otherProps}
            />
          );
        } else if (input.inputType === "CheckBoxInput") {
          return (
            <CheckBoxInput
              key={index}
              checked={form[input.fieldName]}
              label={input.label}
              onChange={onChangeInput(input.fieldName)}
              {...input.otherProps}
            />
          );
        } else return <></>;
      })}
      <Grid item xs={12}>
        <ImageUpload handleImageChange={onImageChange()} />
      </Grid>
    </>
  );
}

export default BlogForm;
