import styled from "styled-components";
import aside from "@Assets/aside.png";

export default function Login() {
  return (
    <>
      <VerticalWrap>
        <LeftSection></LeftSection>
        <MainSection></MainSection>
      </VerticalWrap>
      <LoginWrap>
        <LoginAside></LoginAside>
        <LoginSection></LoginSection>
      </LoginWrap>
    </>
  );
}

const VerticalWrap = styled.div`
  flex: 1;
  display: flex;
`;
const LeftSection = styled.div`
  flex: 1;
`;
const MainSection = styled.div`
  flex: 3;
  background-color: ${(props) => props.theme.primaryColor};
`;
const LoginWrap = styled.div`
  display: flex;
  position: absolute;
  width: 845px;
  height: 550px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  background-color: aquamarine;
`;
const LoginAside = styled.div`
  flex: 1;
  background-image: url(${aside});
`;
const LoginSection = styled.div`
  flex: 1;
`;
