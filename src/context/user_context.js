import React, { useContext, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const UserContext = React.createContext();
export const UserProvider = ({ children }) => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
  const [curUser, setCurUser] = useState(user);
  useEffect(() => {
    console.log("currUser", user);
    console.log("isAuthenticated", isAuthenticated);
    if (isAuthenticated) {
      setCurUser(user);
    } else {
      setCurUser(null);
    }
  }, [isAuthenticated]);
  return (
    <UserContext.Provider value={{ loginWithRedirect, logout, curUser }}>
      {children}
    </UserContext.Provider>
  );
};
// make sure use
export const useUserContext = () => {
  return useContext(UserContext);
};
