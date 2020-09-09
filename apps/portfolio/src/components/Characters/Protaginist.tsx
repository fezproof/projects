import React from "react";
import { FC } from "react";
import styled from "styled-components";

const PersonContainer = styled.div`
  position: relative;
  height: 20rem;
  width: 10rem;
`;

const Head = styled.div`
  height: 5rem;
  width: 5rem;
  border-radius: 2.5rem;
  background-color: blue;
`;

const Body = styled.div`
  height: 20rem;
  width: 7.5rem;
  border-radius: 2.5rem;
  background-color: blue;
`;

const Protaginist: FC = () => {
  return (
    <PersonContainer>
      <Head />
      <Body />
    </PersonContainer>
  );
};

export default Protaginist;
