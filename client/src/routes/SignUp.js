import React from "react";
import Container from "../components/layout/Container";
import FormLayout from "../components/layout/FormLayout";
import LogoBanner from "../components/LogoBanner";
import "../assets/css/form.css";
import Footer from "../components/Footer";

const SignUp = () => {
  return (
    <>
      <Container width={"100%"} flex={"flex"} padding={"0px 0px"} bg={"#fff"}>
        <LogoBanner />

        <FormLayout>
          <div className="form-title">
            <h1>회원가입</h1>

            <form className="form-sign sign-up" method="post">
              <div className="profile">
                <div className="profile-img">
                  <img src="/no_profile.png" alt="프로필 이미지" />
                </div>
                <label htmlFor="userProfile" className="label-file">
                  썸네일 선택
                </label>
                <input
                  type="file"
                  id="userProfile"
                  name="userProfile"
                  className="input-file"
                />
              </div>
              <input type="email" name="userId" placeholder="아이디(이메일)" />
              <input
                type="password"
                name="userPassword1"
                placeholder="비밀번호"
              />
              <input
                type="password"
                name="userPassword2"
                placeholder="비밀번호 확인"
              />
              <input type="text" name="userNickname" placeholder="닉네임" />
              <button type="submit" className="submit-button">
                회원가입
              </button>
            </form>
          </div>
          <Footer color={"#d2d2d2"} width={"auto"} />
        </FormLayout>
      </Container>
    </>
  );
};

export default SignUp;
