import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function PrivateRoute({ component: Component, ...rest }) {
  return (
    <React.Fragment>
      <Redirect to="/users" />
      <Route
        {...rest}
        render={(props) =>
          rest.isLoggedIn ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: props.location },
              }}
            />
          )
        }
      />
    </React.Fragment>
  );
}
