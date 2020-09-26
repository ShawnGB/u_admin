import React, { useContext } from "react";
import { AuthContext } from "./01_Auth_Login/AuthContext";

import { NavLink } from "react-router-dom";

export default function Header() {
  const [isAuth, setIsAuth] = useContext(AuthContext);

  const activeStyle = {
    color: "black",
  };

  return (
    <div className="Header">
      <input
        name="log_in In"
        type="button"
        value={isAuth ? "Log Out" : "Log In"}
        onClick={() => setIsAuth(!isAuth)}
        style={{
          width: "80px",
          height: "36px",
          position: "relative",
          left: "90%",
          top: "1.5em",
        }}
      />
      <div>
        {isAuth ? (
          <div>
            <NavLink className="NavLink" exact activeStyle={activeStyle} to="/">
              Dashboard
            </NavLink>
            <NavLink className="NavLink" activeStyle={activeStyle} to="/users">
              Users
            </NavLink>
            <NavLink
              className="NavLink"
              activeStyle={activeStyle}
              to="/workshops"
            >
              Workshops
            </NavLink>
          </div>
        ) : null}
      </div>
    </div>
  );
}
