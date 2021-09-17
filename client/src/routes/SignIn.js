import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/layout/Container";
import Header from "../components/Header";
import LogoBanner from "../components/LogoBanner";
import FormLayout from "../components/layout/FormLayout";

import "../assets/css/form.css";
import github_icon from "../assets/images/github_icon.png";
import naver_icon from "../assets/images/naver_icon.png";
import kakao_icon from "../assets/images/kakao_icon.png";
import Footer from "../components/Footer";

const SignIn = () => {
  return (
    <>
      <Header width={"100vw"} />
      <Container width={"100%"} flex={"flex"} padding={"0px 0px"} bg={"#fff"}>
        <LogoBanner />
        <FormLayout>
          <div className="form-title">
            <h1>로그인</h1>
            <p>반년일기에 방문해 주셔서 감사합니다.</p>
          </div>

          <form className="form-sign sign-in" method="post">
            <input type="email" name="userId" placeholder="아이디(이메일)" />
            <input type="password" name="userPassword" placeholder="비밀번호" />
            <button type="submit" className="submit-button">
              로그인
            </button>
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
