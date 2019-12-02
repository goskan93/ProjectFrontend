import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Select from "react-select";

export default function SelectInput(props) {
  const { options, isMulti, onChange, xs, md } = props;
  return (
    <Grid item xs={xs} md={md}>
      <Select
        options={options && options.constructor === Array ? options : []}
        isMulti={isMulti}
        onChange={e => onChange(e)}
      />
    </Grid>
  );
}

SelectInput.propTypes = {
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  isMulti: PropTypes.bool,
  xs: PropTypes.number,
  md: PropTypes.number
};

SelectInput.defaultProps = {
  isMulti: true,
  xs: 12,
  md: 12
};
