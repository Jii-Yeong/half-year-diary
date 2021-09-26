import React, { useState } from "react";
import axios from "axios";
import Container from "../components/layout/Container";
import FormLayout from "../components/layout/FormLayout";
import LogoBanner from "../components/LogoBanner";
import "../assets/css/form.css";
import Footer from "../components/Footer";

const SignUp = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [imgBase64, setImgBase64] = useState("");
  const [thumbnail, setThumbnail] = useState(null);

  const handleChangeEmail = (event) => {
    setEmail(event.currentTarget.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.currentTarget.value);
  };

  const handleChangeConfirmPassword = (event) => {
    setConfirmPassword(event.currentTarget.value);
  };

  const handleChangeNickname = (event) => {
    setNickname(event.currentTarget.value);
  };

  // 이미지 base64 인코딩
  const handleChangeThumbnail = (event) => {
    let reader = new FileReader();

    reader.onloadend = () => {
      const base64 = reader.result;

      if (base64) {
        setImgBase64(base64.toString());
      }
    };

    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0]);
      setThumbnail(event.target.files[0]);
    }
  };

  // form axios
  const handleSubmit = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      return alert("비밀번호가 일치하지 않습니다.");
    }

    let data = {
      email: email,
      password: password,
      nickname: nickname,
      userThumb: imgBase64,
    };

    axios
      .post("/hyd/api/user/insert", data)
      .then((response) => {
        console.log(response);

        if (response.status === 200) {
          history.push("/signIn");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Container width={"100%"} flex={"flex"} padding={"0px 0px"} bg={"#fff"}>
        <LogoBanner />

        <FormLayout>
          <div className="form-title">
            <h1>회원가입</h1>

            <form
              className="form-sign sign-up"
              method="post"
              onSubmit={handleSubmit}
            >
              <div className="profile">
                <div
                  className="profile-img"
                  style={{
                    backgroundImage: `url(${
                      imgBase64 ? imgBase64 : "/no_profile.png"
                    })`,
                  }}
                ></div>
                <label htmlFor="thumbnail" className="label-file">
                  썸네일 선택
                </label>
                <input
                  type="file"
                  id="thumbnail"
                  name="thumbnail"
                  onChange={handleChangeThumbnail}
                  className="input-file"
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="아이디(이메일)"
                onChange={handleChangeEmail}
              />
              <input
                type="password"
                name="password"
                placeholder="비밀번호"
                onChange={handleChangePassword}
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="비밀번호 확인"
                onChange={handleChangeConfirmPassword}
              />
              <input
                type="text"
                name="userNickname"
                placeholder="닉네임"
                onChange={handleChangeNickname}
              />
              <button className="submit-button">회원가입</button>
            </form>
          </div>
          <Footer color={"#d2d2d2"} width={"auto"} />
        </FormLayout>
      </Container>
    </>
  );
};

export default SignUp;
