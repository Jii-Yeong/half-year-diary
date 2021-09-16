import React from "react";
import styled from "styled-components";

const FormWrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  background-color: #fff;
`;

const FormLayout = ({ children }) => {
  return <FormWrapper>{children}</FormWrapper>;
};

export default FormLayout;
