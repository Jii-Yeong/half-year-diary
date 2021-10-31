import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import DefaultProfile from "../atoms/DefaultProfile";

let GlobalHeader = styled.header`
  position: fixed;
  width: 100vw;
  height: 50px;
  background-color: #fff;
  box-sizing: border-box;
  z-index: 100;
`;

let HeaderInner = styled.div`
  display: flex;
  align-items: center;
  width: ${(props) => props.width || "1480px"};
  height: 100%;
  margin: 0 auto;
  padding: 0px 20px;
  background-color: #fff;
  box-sizing: border-box;
`;

let ProfileThumbnail = styled.div`
  margin-left: auto;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
`;

let Gnb = styled.nav`
  position: absolute;
  top: 0px;
  left: -250px;
  width: 250px;
  height: 100vh;
  padding: 0px 20px;
  background-color: #fff;
  box-sizing: border-box;
  z-index: 90;
  transition: all 0.5s;
`;

const Header = ({ width, authenticated }) => {
  const [user, setUser] = useState(null);
  const { userThumb } = user || {};

  const getUserInfo = async () => {
    try {
      const response = await axios.post("/hyd/api/user/auth/info");

      setUser(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getUserInfo();
  }, [authenticated]);

  const [isOpenMenu, setMenuOpenState] = useState(false);

  const handleClickOpenMenu = () => {
    setMenuOpenState(!isOpenMenu);
  };

  return (
    <>
      <GlobalHeader>
        <HeaderInner width={width}>
          <div className="hamburger-button" onClick={handleClickOpenMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="header-home">
            <Link to="/" className="home-link">
              반년일기
            </Link>
          </div>

          <ProfileThumbnail>
            <>
              {authenticated ? (
                <Link to="/myPage" className="header-profile">
                  <DefaultProfile
                    img={userThumb ? userThumb : "/no_profile.png"}
                  />
                </Link>
              ) : (
                <Link to="/signIn" className="header-profile">
                  <DefaultProfile
                    img={userThumb ? userThumb : "/no_profile.png"}
                  />
                </Link>
              )}
            </>
          </ProfileThumbnail>
        </HeaderInner>
      </GlobalHeader>

      <Gnb id={`${isOpenMenu ? "open-gnb" : ""}`}>
        <ul className="gnb-list">
          <li>
            <Link to="/guide">사이트 이용 가이드</Link>
          </li>
          <li>
            <Link to="/diary/list">회고록</Link>
          </li>
        </ul>
      </Gnb>
    </>
  );
};

export default Header;
