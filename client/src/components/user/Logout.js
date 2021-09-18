import React from "react";
import { withRouter } from "react-router-dom";

const Logout = ({ logout, history }) => {
  const handleClickLogout = () => {
    logout();
    history.push("/");
  };
  return <button onClick={handleClickLogout}>로그아웃</button>;
};

export default withRouter(Logout);
