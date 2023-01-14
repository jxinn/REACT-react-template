import notFoundImg from "@Assets/404.png";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function NotFound() {
  return (
    <Container>
      <Wrap>
        <Title>WOOPS!</Title>
        <SubTitle>The page you were looking for doesn’t exist.</SubTitle>
        <HomeButton to="/">Go to Home</HomeButton>
      </Wrap>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: 100vh;
  background-image: url("${notFoundImg}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
const Wrap = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.5);
`;
const Title = styled.h1`
  font-size: 108px;
  font-weight: 600;
  line-height: 131px;
  color: #f9bf29;
`;
const SubTitle = styled.h4`
  margin-bottom: 180px;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
`;
const HomeButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 410px;
  height: 50px;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  background: #f9bf29;
  color: #ffffff;
`;
