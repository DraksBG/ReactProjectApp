import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useUserContext } from "../context/user_context";

const PrivateRoute = ({ children, ...rest }) => {
  const { curUser } = useUserContext();
  return (
    <Route
      {...rest}
      render={() => {
        return curUser ? children : <Redirect to="/"></Redirect>;
      }}
    ></Route>
  );
};
export default PrivateRoute;
