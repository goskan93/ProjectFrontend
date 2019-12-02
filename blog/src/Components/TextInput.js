import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

export default function TextInput(props) {
  const {
    label,
    value,
    onChange,
    type,
    variant,
    disabled,
    error,
    helperText,
    fullWidth,
    multiline,
    onBlur,
    required,
    rows,
    textFieldClass,
    margin,
    xs,
    md
  } = props;
  return (
    <Grid item xs={xs} md={md}>
      <TextField
        id={label}
        label={label}
        value={value}
        onChange={e => onChange(e.target.value)}
        type={type}
        className={textFieldClass}
        variant={variant}
        disabled={disabled}
        error={error}
        helperText={error ? helperText[1] : helperText[0]}
        fullWidth={fullWidth}
        multiline={multiline}
        onBlur={e => onBlur(e.target.value)}
        required={required}
        rows={rows}
        margin={margin}
      />
    </Grid>
  );
}

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  type: PropTypes.string,
  textFieldClass: PropTypes.string,
  variant: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  helperText: PropTypes.node,
  fullWidth: PropTypes.bool,
  multiline: PropTypes.bool,
  required: PropTypes.bool,
  rows: PropTypes.number,
  onBlur: PropTypes.func,
  xs: PropTypes.number,
  md: PropTypes.number,
  margin: PropTypes.string
};

TextInput.defaultProps = {
  type: "",
  textFieldClass: "",
  variant: "outlined",
  disabled: false,
  error: false,
  helperText: ["", ""],
  fullWidth: true,
  multiline: false,
  required: true,
  rows: 4,
  onBlur: e => null,
  xs: 12,
  md: 12,
  margin: "dense",
  value: ""
};
