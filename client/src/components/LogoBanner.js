import React from "react";
import styled from "styled-components";
import logoBanner from "../assets/images/logo_banner.jpg";

const Banner = styled.article`
  width: 50%;
  height: 100%;
  background-image: url(${logoBanner});
  background-size: contain;
  background-position: center 50px;
  background-repeat: no-repeat;
`;

const LogoBanner = () => {
  return <Banner />;
};

export default LogoBanner;
