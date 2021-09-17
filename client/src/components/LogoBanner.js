import React from "react";
import styled from "styled-components";
import logoBanner from "../assets/images/logo_banner.jpg";

const Banner = styled.article`
  width: 50%;
  height: 100%;
  background-image: url(${logoBanner});
  background-size: cover;
  background-position: center 40px;
  background-repeat: no-repeat;
`;

const LogoBanner = () => {
  return <Banner />;
};

export default LogoBanner;
