import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

export default function ImageUpload(props) {
  const { xs, md, handleImageChange } = props;
  return (
    <Grid item xs={xs} md={md}>
      <Grid container>
        <input
          accept="image/*"
          style={{ display: "none" }}
          id="raised-button-file"
          type="file"
          onChange={e => handleImageChange(e)}
        />
        <label htmlFor="raised-button-file">
          <Button variant="contained" component="span">
            <CloudUploadIcon />
            <span style={{ marginLeft: 10 }}>Upload File</span>
          </Button>
        </label>
      </Grid>
    </Grid>
  );
}

ImageUpload.propTypes = {
  handleImageChange: PropTypes.func.isRequired,
  xs: PropTypes.number,
  md: PropTypes.number
};

ImageUpload.defaultProps = {
  xs: 12,
  md: 12
};
