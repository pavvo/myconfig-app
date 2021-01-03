import React, { useState, useRef } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

import RegisterForm from "components/RegisterForm";
import { authService } from "services/authService";

const Register = () => {
  const [alert, setAlert] = useState(false);
  const history = useHistory();

  const { register, handleSubmit, errors, watch } = useForm({ mode: "onBlur" });
  const password = useRef({});
  password.current = watch("password", "");

  const onSubmit = (data) =>
    authService
      .signUserUp(data.email, data.password, data.password2)
      .then((res) =>
        res.Message === "ForbiddenError: User already exist"
          ? setAlert(true)
          : history.push("/")
      );

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  return (
    <>
      {currentUser === null ? (
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <RegisterForm
            register={register}
            errors={errors}
            alert={alert}
            password={password}
          />
        </form>
      ) : (
        <Redirect to={{ pathname: "/dashboard" }} />
      )}
    </>
  );
};

export default Register;
