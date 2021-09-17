import React from "react";
import styled from "styled-components";
import logoBanner from "../assets/images/logo_banner.jpg";
import githubImg from "../assets/images/github.png";

const Banner = styled.article`
  position: relative;
  width: 50%;
  height: 100%;
  background-image: url(${logoBanner});
  background-size: cover;
  background-position: center 40px;
  background-repeat: no-repeat;
`;

const LogoBanner = () => {
  return (
    <Banner>
      <a
        href="https://github.com/yeongyeng/half-year-diary"
        className="move-project"
        target="_block"
      >
        <img src={githubImg} alt="깃허브 이동" />
      </a>
    </Banner>
  );
};

export default LogoBanner;
