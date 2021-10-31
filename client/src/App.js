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

import Cookies from "universal-cookie";

function App() {
  const [token, setToken] = useState(null);

  const cookies = new Cookies();
  const getCookise = cookies.get("refresh_token");

  useEffect(() => {
    setToken(getCookise);
  }, [getCookise]);

  return (
    <BrowserRouter>
      <Header authenticated={token} />
      <Route
        render={(props) => (
          <>
            {props.location.pathname !== "/signIn" ? null : (
              <Header width={"100vw"} />
            )}
            <Switch>
              <Route
                path="/signIn"
                render={(props) => <SignIn authenticated={token} {...props} />}
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
        authenticated={token}
        path="/mypage"
        render={(props) => <MyPage authenticated={token} {...props} />}
      />

      <Route path="/diary/list" component={DiaryList} />
      <Route path="/diary/Insert" component={DiaryInsert} />
      <Route path="/diary/datail/:id" component={DiaryDetail} />
    </BrowserRouter>
  );
}

export default App;
