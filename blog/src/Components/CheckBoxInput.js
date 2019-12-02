import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

export default function CheckBoxInput(props) {
  const { checked, onChange, value, label, xs, md } = props;
  return (
    <Grid item xs={xs} md={md}>
      <Grid container>
        <FormControlLabel
          control={
            <Checkbox
              checked={checked}
              value={value}
              onChange={e => onChange(e.target.checked)}
            />
          }
          label={label}
        />
      </Grid>
    </Grid>
  );
}

CheckBoxInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  xs: PropTypes.number,
  md: PropTypes.number
};

CheckBoxInput.defaultProps = {
  xs: 12,
  md: 12,
  value: ""
};
