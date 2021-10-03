import React from "react";
import styled from "styled-components";

const ListContainer = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(4, minmax(150px, 1fr));
  grid-gap: 30px;
`;

const DiaryListLayout = ({ children }) => {
  return <ListContainer>{children}</ListContainer>;
};

export default DiaryListLayout;
