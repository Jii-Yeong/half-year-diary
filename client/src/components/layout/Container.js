import React from "react";
import styled from "styled-components";

let Main = styled.main`
  display: ${(props) => props.flex || "block"};
  width: 100%;
  max-width: ${(props) => props.width || "1480px"};
  height: 100vh;
  padding: ${(props) => props.padding || "80px 20px"};
  margin: 0 auto;
  box-sizing: border-box;
`;

const Container = ({ width, flex, padding, children }) => {
  return (
    <Main width={width} flex={flex} padding={padding}>
      {children}
    </Main>
  );
};

export default Container;
