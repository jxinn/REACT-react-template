import styled from "styled-components";

export default function Home() {
  return (
    <>
      <Container>Home</Container>
    </>
  );
}

const Container = styled.div`
  height: 100%;
  background-color: ${(props) => props.theme.bgColor};
`;
