import React, { useState } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";

import Container from "../../components/atoms/Container";
import SideBanner from "../../components/banner/SideBanner";
import FormLayout from "../../components/layout/FormLayout";
import Footer from "../../components/organisms/Footer";
import DefaultButton from "../../components/atoms/Button";

import "../assets/css/form.css";
import github_icon from "../assets/images/github_icon.png";
import naver_icon from "../assets/images/naver_icon.png";
import kakao_icon from "../assets/images/kakao_icon.png";

import { LoginSucces } from "./Refresh";

const SignIn = ({ authenticated, login, location }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = (event) => {
    setEmail(event.currentTarget.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.currentTarget.value);
  };

  // 로그인
  const handleClickSubmit = (event) => {
    event.preventDefault();

    let data = {
      email: email,
      password: password,
    };

    axios.post("/hyd/api/user/login", data).then((response) => {
      LoginSucces(response, email, password);
      let token = response.data;

      login({ token, email });
    });
  };

  const { from } = location.state || { from: { pathname: "/" } };
  if (authenticated) return <Redirect to={from} />;

  return (
    <>
      <Container width={"100%"} flex={"flex"} padding={"0px 0px"} bg={"#fff"}>
        <SideBanner />
        <FormLayout>
          <div className="form-title">
            <h1>로그인</h1>
            <p>반년일기에 방문해 주셔서 감사합니다.</p>
          </div>

          <form className="form-sign sign-in" onSubmit={handleClickSubmit}>
            <input
              value={email}
              onChange={handleChangeEmail}
              type="email"
              name="email"
              placeholder="아이디(이메일)"
            />
            <input
              value={password}
              onChange={handleChangePassword}
              type="password"
              name="password"
              placeholder="비밀번호"
            />
            <DefaultButton className={"signIn-button"} text={"로그인"} />
          </form>

          <div className="sns-button-group">
            <button type="button">
              <img src={github_icon} alt="깃허브" />
            </button>
            <button type="button">
              <img src={naver_icon} alt="네이버" />
            </button>
            <button type="button">
              <img src={kakao_icon} alt="카카오" />
            </button>
          </div>

          <div className="move-sign-up">
            <span>아직 회원이 아니신가요?</span>
            <Link to="/signUp">회원가입 →</Link>
          </div>

          <Footer color={"#d2d2d2"} width={"auto"} />
        </FormLayout>
      </Container>
    </>
  );
};

export default SignIn;
