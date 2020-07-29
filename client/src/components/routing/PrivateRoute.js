import React, { useContext, Fragment } from "react";
import AuthContext from "../../context/auth/AuthContext";
import Login from "../auth/Login";

const PrivateRoute = ({ as: Component, ...props }) => {
  const { isAuthenticated, loading } = useContext(AuthContext);
  return (
    <Fragment>
      {isAuthenticated && !loading ? (
        <Component {...props} />
      ) : (
        <Login path='login' />
      )}
    </Fragment>
  );
};

export default PrivateRoute;
