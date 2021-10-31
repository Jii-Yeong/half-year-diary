import React, { useEffect, useState } from "react";
import axios from "axios";

import Container from "../../components/layout/Container";
// import Logout from "../components/user/Logout";

import { SilentRefresh } from "../SignIn/Refresh";

const MyPage = ({ authenticated }) => {
  const [user, setUser] = useState(null);
  const { email, nickname, userThumb } = user || {};

  const getUserInfo = async () => {
    try {
      const response = await axios.post("/hyd/api/user/auth/info");

      setUser(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    SilentRefresh();
    getUserInfo();
  }, [authenticated]);

  return (
    <>
      <Container>
        <table>
          <tbody>
            <tr>
              <th>이메일</th>
              <td>{email}</td>
            </tr>
            <tr>
              <th>닉네임</th>
              <td>{nickname}</td>
            </tr>
            <tr>
              <th>프로필 이미지</th>
              <td>
                <img src={`${userThumb}`} alt="프로필 이미지" />
              </td>
            </tr>
          </tbody>
        </table>
      </Container>
    </>
  );
};

export default MyPage;
