import React from "react";
import styled from "styled-components";

const ListContainer = styled.div`
  width: 100%;
  height: auto;
  padding-top: 80px;
  padding-bottom: 40px;
  display: grid;
  grid-template-columns: repeat(4, minmax(150px, 1fr));
  grid-gap: 40px;
`;

const DiaryListLayout = ({ children }) => {
  return <ListContainer>{children}</ListContainer>;
};

export default DiaryListLayout;
