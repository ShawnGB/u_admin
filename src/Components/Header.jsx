import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";

import { NavLink } from "react-router-dom";

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
      {isAuth ? (
        <div>
          <NavLink to="/">Dashboard</NavLink>
          <NavLink to="/users">Users</NavLink>
          <NavLink to="/workshops">Workshops</NavLink>
        </div>
      ) : null}
      <button onClick={() => setIsAuth(!isAuth)}>Log IN</button>
    </div>
  );
}
