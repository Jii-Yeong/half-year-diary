import React from "react";
import styled from "styled-components";

const Button = styled.button`
  width: ${(props) => props.width || "100%"};
  color: ${(props) => props.textColor || "#fff"};
  cursor: pointer;
  letter-spacing: -0.5px;
  font-family: "Noto Sans KR", sans-serif;
  border: 0;
  background-color: ${(props) => props.bgColor || "#e08279"};
  border-radius: 35px;
  box-sizing: border-box;
`;

const DefaultButton = ({ width, bgColor, textColor, className, text }) => {
  return (
    <Button
      className={`default-button ${className}`}
      width={width}
      bgColor={bgColor}
      textColor={textColor}
    >
      {text}
    </Button>
  );
};

export default DefaultButton;
