import styled from "styled-components";

const App = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Title = styled.h1`
  font-size: 10vw;
  color: #fff;
`;

export default () => (
  <App>
    <Title>in dev..</Title>
  </App>
);
