import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      const currentUser = localStorage.getItem("currentUser");
      if (currentUser === null) {
        return (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        );
      }

      return <Component {...props} />;
    }}
  />
);

export default ProtectedRoute;
