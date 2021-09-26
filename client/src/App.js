import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./routes/Home";
import SignIn from "./routes/SignIn";
import SignUp from "./routes/SignUp";
import Guide from "./routes/Guide";
import DiaryList from "./routes/diary/DiaryList";
import DiaryInsert from "./routes/diary/DiaryInsert";
import DiaryDetail from "./routes/diary/DiaryDetail";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route
        render={(props) => (
          <>
            {props.location.pathname !== "/signIn" ? (
              <Header />
            ) : (
              <Header width={"100vw"} />
            )}
            <Switch>
              <Route path="/signIn" render={(props) => <SignIn {...props} />} />
            </Switch>
          </>
        )}
      />
      <Route
        render={(props) => (
          <>
            {props.location.pathname !== "/signUp" ? (
              <Header />
            ) : (
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
      <Route path="/diary/list" component={DiaryList} />
      <Route path="/diary/Insert" component={DiaryInsert} />
      <Route path="/diary/datail/:id" component={DiaryDetail} />
    </BrowserRouter>
  );
}

export default App;
