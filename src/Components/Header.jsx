import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";

export default function Header() {
  const [isAuth, setIsAuth] = useContext(AuthContext);

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "lightgrey",
        height: "80px",
      }}
    >
      <button onClick={() => setIsAuth(!isAuth)}>Log IN</button>
      <h1>{isAuth ? "Logged In" : "Logged Out"}</h1>
    </div>
  );
}
