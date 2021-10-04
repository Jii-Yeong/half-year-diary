import React from "react";
import styled from "styled-components";

const Main = styled.main`
  display: ${(props) => props.flex || "block"};
  width: 100%;
  max-width: ${(props) => props.width || "1480px"};
  height: 100vh;
  padding: ${(props) => props.padding || "80px 20px"};
  margin: 0 auto;
  background-color: ${(props) => props.bg || "#e08279"};
  box-sizing: border-box;
`;

const Container = ({ width, flex, padding, bg, children }) => {
  return (
    <Main width={width} flex={flex} padding={padding} bg={bg}>
      {children}
    </Main>
  );
};

export default Container;
