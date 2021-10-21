import React, { useEffect } from "react";
import Container from "../components/layout/Container";
import Logout from "../components/user/Logout";

import { SilentRefresh } from "../components/user/Refresh";

const MyPage = ({ user, logout }) => {
  const { id, password, nickname, profile } = user || {};

  useEffect(() => {
    SilentRefresh();
  }, []);

  return (
    <>
      <Container>
        <table>
          <tbody>
            <tr>
              <th>이메일</th>
              <td>{id}</td>
            </tr>
            <tr>
              <th>비밀번호</th>
              <td>{password}</td>
            </tr>
            <tr>
              <th>닉네임</th>
              <td>{nickname}</td>
            </tr>
            <tr>
              <th>프로필 이미지</th>
              <td>
                <img src={`${profile}`} alt="프로필 이미지" />
              </td>
            </tr>
          </tbody>
        </table>
        <Logout logout={logout} />
      </Container>
    </>
  );
};

export default MyPage;
