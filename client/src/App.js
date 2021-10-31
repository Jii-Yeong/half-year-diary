import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home/index";
import SignIn from "./pages/SignIn/index";
import SignUp from "./pages/SignUp/index";
import Guide from "./pages/Intro/index";
import DiaryList from "./pages/DiaryList/index";
import DiaryInsert from "./pages/DiaryInsert/index";
import DiaryDetail from "./pages/DiaryDetail/index";
import MyPage from "./pages/MyPage/index";

import Header from "./components/organisms/Header";

import AuthRoute from "./utils/AuthRoute";
import { getTokenToCookie } from "./utils/auth";
// import { SilentRefresh } from "./components/user/Refresh";

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
