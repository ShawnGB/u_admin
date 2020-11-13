import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const [isAuth, setIsAuth] = useState(true);

  // const checkAuth = () => {
  //   const token = localStorage.getItem("token");
  //   const refreshToken = localStorage.getItem("refreshToken");
  //   if (!token || !refreshToken) {
  //     return false;
  //   }

  //   return true;
  // };

  return (
    <AuthContext.Provider value={[isAuth, setIsAuth]}>
      {props.children}
    </AuthContext.Provider>
  );
};
