import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

import LoginForm from "components/LoginForm";
import { authService } from "services/authService";

const Login = () => {
  const [alert, setAlert] = useState(false);
  const { register, handleSubmit, errors } = useForm({ mode: "onBlur" });
  const history = useHistory();

  const onSubmit = (data) =>
    authService
      .signUserIn(data.email, data.password)
      .then((res) =>
        res === "Error" ? setAlert(true) : history.push("/dashboard")
      );

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  return (
    <>
      {currentUser === null ? (
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <LoginForm register={register} errors={errors} alert={alert} />
        </form>
      ) : (
        <Redirect to={{ pathname: "/dashboard" }} />
      )}
    </>
  );
};

export default Login;
