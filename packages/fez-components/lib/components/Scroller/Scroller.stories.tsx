import React, { FC } from 'react';
import Scroller from '.';
import styled from 'styled-components';

export default { title: 'Components/Scroller' };

const StyledDiv = styled.div`
  padding: 0.5rem;
  margin: 0.5rem;
  border: 1px solid grey;
`;

const Element: FC = () => (
  <StyledDiv>
    <p>This is a div</p>
    <p>This has some stuff in it</p>
  </StyledDiv>
);

export const NoMaxHeight = () => (
  <Scroller>
    <Element />
    <Element />
    <Element />
    <Element />
    <Element />
    <Element />
    <Element />
    <Element />
    <Element />
    <Element />
    <Element />
    <Element />
    <Element />
    <Element />
    <Element />
    <Element />
    <Element />
  </Scroller>
);

export const MaxHeight = () => (
  <Scroller maxHeight="20rem">
    <Element />
    <Element />
    <Element />
    <Element />
    <Element />
    <Element />
    <Element />
    <Element />
    <Element />
    <Element />
    <Element />
    <Element />
    <Element />
    <Element />
    <Element />
    <Element />
    <Element />
  </Scroller>
);

const Constrainer = styled.div`
  height: 20rem;
`;

export const ConstrainedMaxHeight = () => (
  <Constrainer>
    <Scroller>
      <Element />
      <Element />
      <Element />
      <Element />
      <Element />
      <Element />
      <Element />
      <Element />
      <Element />
      <Element />
      <Element />
      <Element />
      <Element />
      <Element />
      <Element />
      <Element />
      <Element />
    </Scroller>
  </Constrainer>
);
