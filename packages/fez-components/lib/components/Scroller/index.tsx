import React, { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';

interface ScrollerProps {
  maxHeight?: string;
}

const Scroller: FC<ScrollerProps & HTMLAttributes<HTMLDivElement>> = ({
  children,
  ...props
}) => <div {...props}>{children}</div>;

const StyledScroller = styled(Scroller)`
  &::-webkit-scrollbar {
    width: 0.4rem;
  }
  &::-webkit-scrollbar-thumb {
    background-clip: content-box;
    border-radius: 0.2rem;
    background-color: #66666655;
  }
  &::-webkit-scrollbar-button {
    width: 0;
    height: 0;
    display: none;
  }
  &::-webkit-scrollbar-corner {
    background-color: transparent;
  }
  &:hover {
    &::-webkit-scrollbar-thumb {
      background-color: #666666ff;
    }
  }

  max-height: ${(props) => props.maxHeight};
  height: 100%;
  overflow-y: auto;
  /* transition: 0.3s; */

  /* padding: 1rem 0; */

  /* background: linear-gradient(white 30%, rgba(255, 255, 255, 0)),
    linear-gradient(rgba(255, 255, 255, 0), white 70%) 0 100%,
    radial-gradient(
      farthest-side at 50% 0,
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0)
    ),
    radial-gradient(
        farthest-side at 50% 100%,
        rgba(0, 0, 0, 0.2),
        rgba(0, 0, 0, 0)
      )
      0 100%;
  background-repeat: no-repeat;
  background-color: white;
  background-attachment: local, local, scroll, scroll;

  background-size: 100% 10%, 100% 10%, 100% 0.5rem, 100% 0.5rem;
  &:hover {
    background-size: 100% 10%, 100% 10%, 100% 1rem, 100% 1rem;
  } */
`;

export default StyledScroller;
