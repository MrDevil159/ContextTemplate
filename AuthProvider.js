import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState({ name: "mehfooz" });
  const [role, setRole] = useState({ role: "" });
  const [loggedIn, setLoggedIn] = useState(false);

  const all = {
    token: [token, setToken],
    role: [role, setRole],
    loggedIn: [loggedIn, setLoggedIn]
  };

  return (
    <AuthContext.Provider value={{ all }}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
//This is the context file and will be imported everywhere required!
