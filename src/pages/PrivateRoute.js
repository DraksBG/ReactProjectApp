import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const PrivateRoute = ({ children, ...rest }) => {
  const { user } = useAuth0();
  return (
    <>
      {user?.nickname === "draksbg" &&
      rest.computedMatch.url === "/add-product" ? (
        <Route
          {...rest}
          render={() => {
            return user ? children : <Redirect to="/"></Redirect>;
          }}
        ></Route>
      ) : (
        <Route
          {...rest}
          render={() => {
            return user && rest.computedMatch.url !== "/add-product" ? (
              children
            ) : (
              <Redirect to="/"></Redirect>
            );
          }}
        ></Route>
      )}
    </>
  );
};
export default PrivateRoute;
