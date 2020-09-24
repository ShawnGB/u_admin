import React, { useContext } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import PrivateRoute from "./Components/01_Auth_Login/PrivateRoute";
import { AuthContext } from "./Components/01_Auth_Login/AuthContext";

import Header from "./Components/Header";
import Dashboard from "./Pages/Dashboard";
import Users from "./Pages/Users";
import Workshops from "./Pages/Workshops";

function App() {
  const [isAuth] = useContext(AuthContext);

  const Routes = [
    { path: "/", component: Dashboard },
    { path: "/users", component: Users },
    { path: "/workshops", component: Workshops },
  ];

  return (
    <Router>
      <Header />
      {isAuth ? (
        Routes.map((route) => (
          <PrivateRoute
            path={route.path}
            exact
            component={route.component}
            key={route.path}
            isLoggedIn={isAuth}
          />
        ))
      ) : (
        <div>Please Log in</div>
      )}
    </Router>
  );
}

export default App;
