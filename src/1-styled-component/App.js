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

function App() {
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

export default App;
