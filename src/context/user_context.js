import React, { useContext, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const UserContext = React.createContext();
export const UserProvider = ({ children }) => {
  const { loginWithRedirect, logout, user } = useAuth0();
  const [curUser, setCurUser] = useState(user);
  useEffect(() => {
    setCurUser(user);
  }, [user]);
  return (
    <UserContext.Provider value={{ loginWithRedirect, logout, curUser }}>
      {children}
    </UserContext.Provider>
  );
};
export const useUserContext = () => {
  return useContext(UserContext);
};
