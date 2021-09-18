import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { auth } from "./components/user/Auth";

import Home from "./routes/Home";
import SignIn from "./routes/SignIn";
import SignUp from "./routes/SignUp";
import MyPage from "./routes/MyPage";
import Guide from "./routes/Guide";
import DiaryList from "./routes/diary/DiaryList";
import DiaryInsert from "./routes/diary/DiaryInsert";
import DiaryDetail from "./routes/diary/DiaryDetail";
import AuthRoute from "./routes/AuthRoute";
import Header from "./components/Header";

function App() {
  const [user, setUser] = useState(null);
  const authenticated = user != null; // 인증 여부 저장

  const login = ({ id, password }) => setUser(auth({ id, password }));
  const logout = () => setUser(null);

  return (
    <BrowserRouter>
      <Header user={user} />
      <Route
        render={(props) => (
          <>
            {props.location.pathname !== "/signIn" ? (
              <Header user={user} />
            ) : (
              <Header user={user} width={"100vw"} />
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
            {props.location.pathname !== "/signUp" ? (
              <Header user={user} />
            ) : (
              <Header user={user} width={"100vw"} />
            )}
            <Switch>
              <Route path="/signUp" component={SignUp} />
            </Switch>
          </>
        )}
      />
      <Route path="/" component={Home} exact={true} />
      <AuthRoute
        authenticated={authenticated}
        path="/mypage"
        render={(props) => <MyPage user={user} logout={logout} {...props} />}
      />
      <Route path="/guide" component={Guide} />
      <Route path="/diary/list" component={DiaryList} />
      <Route path="/diary/Insert" component={DiaryInsert} />
      <Route path="/diary/datail/:id" component={DiaryDetail} />
    </BrowserRouter>
  );
}

export default App;
