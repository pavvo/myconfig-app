import React from "react";
import { Link } from "react-router-dom";

import { TextField, Button } from "@material-ui/core/";
import { Alert } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  loginForm: {
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

const LoginForm = ({ register, errors, alert }) => {
  const classes = useStyles();

  return (
    <div className={classes.loginForm}>
      <h1>Sign in</h1>
      {alert && <Alert severity="error">Wrong email or password</Alert>}
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
      <Button variant="contained" color="primary" type="submit">
        Sign in
      </Button>
      <span>
        If you don't have an account{" "}
        <Link to="/register" style={{ color: "#3f51b5" }}>
          click here
        </Link>
      </span>
    </div>
  );
};

export default LoginForm;
