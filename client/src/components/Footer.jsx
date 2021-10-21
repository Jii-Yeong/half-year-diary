import React from "react";
import styled from "styled-components";

let GlobalFooter = styled.footer`
  position: absolute;
  bottom: 0;
  padding: 20px 0px;
  width: ${(props) => props.width || "100%"};
  color: ${(props) => props.color || "#cb5d52"};
  text-align: center;
  font-size: 13px;
`;

const Footer = ({ color, width }) => {
  return (
    <GlobalFooter color={color} width={width}>
      Copyright(C) 2021 yeongyeng All rights reserved.
    </GlobalFooter>
  );
};

export default Footer;
