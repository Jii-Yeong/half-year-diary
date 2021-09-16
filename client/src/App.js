import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import SignIn from "./routes/SignIn";
import SignUp from "./routes/SignUp";
import MyPage from "./routes/MyPage";
import Guide from "./routes/Guide";
import DiaryList from "./routes/diary/DiaryList";
import DiaryInsert from "./routes/diary/DiaryInsert";
import DiaryDetail from "./routes/diary/DiaryDetail";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Home} exact={true} />
      <Route path="/signIn" component={SignIn} />
      <Route path="/signUp" component={SignUp} />
      <Route path="/myPage/:id" component={MyPage} />
      <Route path="/guide" component={Guide} />
      <Route path="/diary/list" component={DiaryList} />
      <Route path="/diary/Insert" component={DiaryInsert} />
      <Route path="/diary/datail/:id" component={DiaryDetail} />
    </BrowserRouter>
  );
}

export default App;
