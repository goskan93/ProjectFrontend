import React from "react";
import {
  TextInput,
  SelectInput,
  CheckBoxInput,
  ImageUpload
} from "../../Components";

function BlogForm(props) {
  const { formInput, form, onChangeInput, onBlurInput, onImageChange } = props;
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
              onBlur={onBlurInput(input.fieldName)}
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
              onChange={onChangeInput(input.fieldName)}
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
      <ImageUpload handleImageChange={onImageChange()} />
    </>
  );
}

export default BlogForm;