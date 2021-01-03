import React from "react";

import FileCopyIcon from "@material-ui/icons/FileCopy";
import { Button, IconButton, Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const DisplayConfig = ({
  copied,
  setCopied,
  details,
  classes,
  setIsEditing,
  isEditing,
}) => {
  return (
    <div>
      {copied ? (
        <Snackbar
          open={copied}
          autoHideDuration={2000}
          onClose={() => setCopied(!copied)}
        >
          <Alert onClose={() => setCopied(!copied)} severity="success">
            Copied successfully
          </Alert>
        </Snackbar>
      ) : (
        ""
      )}

      <pre>{JSON.stringify(details, null, 2)}</pre>

      <div className={classes.buttonGroup}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={() => setIsEditing(!isEditing)}
        >
          Edit
        </Button>
        <IconButton
          aria-label="delete"
          color="primary"
          onClick={() => {
            navigator.clipboard.writeText(JSON.stringify(details, null, 2));
            setCopied(!copied);
          }}
        >
          <FileCopyIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default DisplayConfig;
