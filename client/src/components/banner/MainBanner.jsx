import React from "react";
import styled from "styled-components";
import bannerImg from "../../assets/images/main_banner.jpg";

const Banner = styled.article`
  position: relative;
  width: 100%;
  height: 280px;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: rgb(212 92 81 / 60%) 4px 4px 30px 8px;
  background-color: #fff;
  background-size: contain;
  background-position: center;
  background-image: url(${bannerImg});
  background-repeat: no-repeat;
`;

const MainBanner = ({ children }) => {
  return <Banner>{children}</Banner>;
};

export default MainBanner;
