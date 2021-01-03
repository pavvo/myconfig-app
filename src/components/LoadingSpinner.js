import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { CircularProgress } from "@material-ui/core";

const useStyles = makeStyles({
  loadingSpinner: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "25px",
  },
});

const LoadingSpinner = () => {
  const classes = useStyles();
  return (
    <div className={classes.loadingSpinner}>
      <CircularProgress />
    </div>
  );
};

export default LoadingSpinner;
