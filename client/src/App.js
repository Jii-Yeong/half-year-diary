import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./routes/Home";
import SignIn from "./routes/SignIn";
import SignUp from "./routes/SignUp";
import Guide from "./routes/Guide";
import DiaryList from "./routes/diary/DiaryList";
import DiaryInsert from "./routes/diary/DiaryInsert";
import DiaryDetail from "./routes/diary/DiaryDetail";
import Header from "./components/Header";
import MyPage from "./routes/MyPage";

import AuthRoute from "./routes/AuthRoute";
import { getTokenToCookie } from "./routes/auth";
import { SilentRefresh } from "./components/user/Refresh";

import Cookies from "universal-cookie";

function App() {
  const cookies = new Cookies();
  const getCookise = cookies.get("refresh_token");

  const [user, setUser] = useState(null);

  const authenticated = user != null;

  // useEffect(() => {
  //   SilentRefresh();
  // }, [user]);

  const login = ({ token, email }) => {
    setUser(getTokenToCookie({ token, email }));
  };

  if (getCookise) {
    login();
  }

  // if (!getCookise) return;

  console.log(authenticated, user);
  // console.log(SilentRefresh);

  return (
    <BrowserRouter>
      <Header user={user} />
      <Route
        render={(props) => (
          <>
            {props.location.pathname !== "/signIn" ? null : (
              <Header width={"100vw"} />
            )}
            <Switch>
              <Route
                path="/signIn"
                render={(props) => (
                  <SignIn
                    authenticated={authenticated}
                    login={login}
                    {...props}
                  />
                )}
              />
            </Switch>
          </>
        )}
      />
      <Route
        render={(props) => (
          <>
            {props.location.pathname !== "/signUp" ? null : (
              <Header width={"100vw"} />
            )}
            <Switch>
              <Route path="/signUp" component={SignUp} />
            </Switch>
          </>
        )}
      />
      <Route path="/" component={Home} exact={true} />
      <Route path="/guide" component={Guide} />

      <AuthRoute
        authenticated={authenticated}
        path="/mypage"
        render={(props) => <MyPage user={user} {...props} />}
      />

      <Route path="/diary/list" component={DiaryList} />
      <Route path="/diary/Insert" component={DiaryInsert} />
      <Route path="/diary/datail/:id" component={DiaryDetail} />
    </BrowserRouter>
  );
}

export default App;
