import React from "react";
import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

const rotationAnimation = keyframes`
0% {
  transform: rotate(0deg);
  border-radius: 0px;
}
50% {
  border-radius:100px;
}
100% {
  transform: rotate(360deg);
  border-radius: 0px;
  }
`;

const Emoji = styled.span`
  font-size: 36px;
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotationAnimation} 1s linear infinite;
  /* span {
    font-size: 36px;
    &:hover {
      font-size: 48px;
    }
    &:active {
      opacity: 0;
    }
  } */
  /* span:hover {
    font-size: 48px;
  }
  span:active {
    opacity: 0;
  } */

  ${Emoji} {
    &:hover {
      font-size: 98px;
    }
  }
`;

function AnimationPseudo() {
  return (
    <Wrapper>
      <Box>
        {/* <span>😍</span> */}
        <Emoji>😍</Emoji>
      </Box>
      <Emoji>💗</Emoji>
    </Wrapper>
  );
}

export default AnimationPseudo;
