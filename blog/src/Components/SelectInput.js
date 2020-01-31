import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from "react-select";
import { green, pink, darkpink, errorpink, background } from '../Utils/colors'

//TODO: Do it better !!!!
const customStyles = {
  option: (provided, _) => ({
    ...provided,
    fontWeight: 'bold',
    color: darkpink,
  }),

  multiValue: (styles, _) => {
    return {
      ...styles,
      backgroundColor: background,
      color:green,
    };
  },
  multiValueLabel: (styles, _) => ({
    ...styles,
    color: green,
    fontWeight:'bold'
  }),
  multiValueRemove: (styles, _) => ({
    ...styles,
    color: green,
    ':hover': {
      backgroundColor: green,
      color: pink,
    },
  }),
}
const control = {
  control: (provided, state) => ({
    ...provided,
    borderColor: green ,
    boxShadow: 0,
    borderWeigth: 1,
    ':isFocused':{
      borderColor: green,
    },
    ':hover': {
      borderColor: pink,
    },
  }),
}
const controlError = {
  control: (provided, _) => ({
    ...provided,
    borderColor: errorpink,
    boxShadow: 0,
    borderWeigth: 1,
    ':isFocused':{
      borderColor: green,
    },
    ':hover': {
      borderColor: pink,
    },
  }),
}

export default function SelectInput(props) {
  const { options, isMulti, onChange, value, xs, md, helperText, helperTextStyle, error } = props;
  const helperTextStyles = error ? {marginLeft:14, color:errorpink, ...helperTextStyle} : {marginLeft:14, ...helperTextStyle}
  const customStyle = error ? {...customStyles, ...controlError} : {...customStyles, ...control}
  return (
    <Grid item xs={xs} md={md}>
      <Select
        styles={customStyle}
        options={options && options.constructor === Array ? options : []}
        isMulti={isMulti}
        value={value}
        onChange={e => onChange(e)}
      />
      <FormHelperText style={helperTextStyles}>{error ? helperText[1] : helperText[0]}</FormHelperText>
    </Grid>
  );
}

SelectInput.propTypes = {
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  isMulti: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  xs: PropTypes.number,
  md: PropTypes.number,
  helperText: PropTypes.string,
  helperTextStyle: PropTypes.object,
  error: PropTypes.bool
};

SelectInput.defaultProps = {
  isMulti: true,
  value:[],
  xs: 12,
  md: 12,
  helperText:["",""] ,
  helperTextStyle: {},
  error:false
};
