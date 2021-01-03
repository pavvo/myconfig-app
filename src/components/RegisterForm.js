import React from "react";
import { Link } from "react-router-dom";

import { TextField, Button } from "@material-ui/core/";
import { Alert } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  registerForm: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    "& > *": {
      margin: theme.spacing(2),
      width: "350px",
    },
    "& > button": {
      height: "50px",
    },
    "& > h1": {
      fontSize: "32px",
      color: "#3f51b5",
      fontWeight: "600",
    },
  },
}));

const RegisterForm = ({ register, errors, alert, password }) => {
  const classes = useStyles();

  return (
    <div className={classes.registerForm}>
      <h1>Sign up</h1>
      {alert && <Alert severity="error">This email is already in use</Alert>}

      <TextField
        name="email"
        id="email"
        type="email"
        label="Email"
        variant="outlined"
        inputRef={register({ required: true })}
        error={!!errors?.email}
        helperText={errors.email && "Please enter your email address"}
      />
      <TextField
        name="password"
        id="password"
        type="password"
        label="Password"
        variant="outlined"
        inputRef={register({ required: true })}
        error={!!errors?.password}
        helperText={errors.password && "Please enter a password"}
      />
      <TextField
        name="password2"
        id="password2"
        type="password"
        label="Confirm password"
        variant="outlined"
        inputRef={register({
          validate: (value) => value === password.current,
        })}
        error={!!errors?.password2}
        helperText={errors.password2 && "The passwords do not match"}
      />
      <Button variant="contained" color="primary" type="submit">
        Sign up
      </Button>
      <span>
        If you already have an account{" "}
        <Link to="/" style={{ color: "#3f51b5" }}>
          click here
        </Link>
      </span>
    </div>
  );
};

export default RegisterForm;
