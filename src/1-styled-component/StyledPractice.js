import React from "react";
import styled from "styled-components";

const Father = styled.div`
  display: flex;
  flex-direction: column;
`;

const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;

const Circle = styled(Box)`
  border-radius: 50px;
`;

const Btn = styled.button`
  color: white;
  background-color: tomato;
  border: 0;
  border-radius: 15px;
`;

const Link = styled(Btn)``;

const Input = styled.input.attrs({ required: true, minLength: 10 })`
  background-color: tomato;
`;
// attrs() <- 여기에는 후에 input으로 전달될 모든 속성을 가진 오브젝트를 담을 수 있다.
// 위의 경우에는 required와 minLength를 default 값으로 할당할 수 있다.

function StyledPractice() {
  return (
    <Father as="header">
      <div>
        <Box bgColor="teal" />
        <Circle bgColor="tomato" />
      </div>

      <div>
        <Btn>Log in</Btn>
        <Btn as="a" href="">
          Log in
        </Btn>
        {/* button 태그가 아닌 a 태그를 적용하도록 하는 방법 */}
      </div>

      <div>
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
      </div>
    </Father>
  );
}

export default StyledPractice;
