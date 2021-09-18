import React from "react";
import { Route, Redirect } from "react-router-dom";

// 인증이 필요한 페이지 전용 라우트
const AuthRoute = ({
  authenticated,
  component: Component,
  render,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated ? (
          render ? (
            render(props)
          ) : (
            <Component {...props} />
          )
        ) : (
          <Redirect
            to={{ pathname: "/signIn", state: { from: props.location } }}
          />
        )
      }
    />
  );
};

export default AuthRoute;
