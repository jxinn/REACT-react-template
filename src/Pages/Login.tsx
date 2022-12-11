import styled from "styled-components";
import { VerticalWrap } from "@Components/Layout";
import { VerticalForm } from "@Components/Form";
import InputWrap from "@Components/Input";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <VerticalWrap />
      <VerticalForm>
        <LoginFormBox>
          <LoginTitle>Login</LoginTitle>
          <LoginInput>
            <InputWrap>
              <input className="inp" placeholder="Email" />
            </InputWrap>
            <InputWrap>
              <input className="inp" placeholder="Password" />
            </InputWrap>
          </LoginInput>
        </LoginFormBox>
        <LoginBtnBox>
          <LoginBtn as="button">Login</LoginBtn>
          <LoginBtn to="/signup" bgColor="#EFF2F1" color="#2F2F2F">
            SignUp
          </LoginBtn>
        </LoginBtnBox>
      </VerticalForm>
    </>
  );
}

const LoginFormBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 40px 50px;
`;
const LoginTitle = styled.h1`
  margin-bottom: 45px;
  font-weight: 600;
  font-size: 54px;
  line-height: 65px;
`;
const LoginInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const LoginBtnBox = styled.div`
  display: flex;
  height: 50px;
`;
const LoginBtn = styled(Link)<{ bgColor?: string; color?: string }>`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  font-size: 14px;
  font-weight: 400;
  background-color: ${(props) => props.bgColor || "#2F2F2F"};
  color: ${(props) => props.color || "#FFFFFF"};
`;
