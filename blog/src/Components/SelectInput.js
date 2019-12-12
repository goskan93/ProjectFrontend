import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from "react-select";
import { green, pink, darkpink, white, background } from '../Utils/colors'

const customStyles = {
  option: (provided, _) => ({
    ...provided,
    fontWeight: 'bold',
    color: darkpink,
  }),
  control: (provided, state) => ({
    ...provided,
    borderColor: state.isFocused ? green : pink,
    boxShadow: 0,
    borderWeigth: 1,
    ':isFocused':{
      borderColor: green,
    },
    ':hover': {
      borderColor: green,
    },
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

export default function SelectInput(props) {
  const { options, isMulti, onChange, value, xs, md, helperText, helperTextStyle } = props;
  return (
    <Grid item xs={xs} md={md}>
      <Select
        styles={customStyles}
        options={options && options.constructor === Array ? options : []}
        isMulti={isMulti}
        value={value}
        onChange={e => onChange(e)}
      />
      <FormHelperText style={{marginLeft:14, ...helperTextStyle}}>{helperText}</FormHelperText>
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
  helperTextStyle: PropTypes.object
};

SelectInput.defaultProps = {
  isMulti: true,
  value:[],
  xs: 12,
  md: 12,
  helperText:"" ,
  helperTextStyle: {}
};
