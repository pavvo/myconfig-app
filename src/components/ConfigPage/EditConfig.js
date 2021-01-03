import { Button, TextField } from "@material-ui/core";

const EditConfig = ({
  details,
  handleChange,
  classes,
  isEditing,
  setIsEditing,
}) => {
  return (
    <div>
      <TextField
        id="outlined-multiline-static"
        label="Edit config"
        multiline
        rows={6}
        value={JSON.stringify(details, null, 2)}
        variant="outlined"
        onChange={handleChange}
        fullWidth
      />
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        style={{ marginTop: "15px" }}
        onClick={() => setIsEditing(!isEditing)}
      >
        Save
      </Button>
    </div>
  );
};

export default EditConfig;
