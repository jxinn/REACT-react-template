import styled from "styled-components";
import { VerticalWrap } from "@Components/Layout";
import { VerticalForm } from "@Components/Form";
import InputWrap from "@Components/Input";

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
          <LoginBtn>Login</LoginBtn>
          <LoginBtn bgColor="#EFF2F1" color="2F2F2F">
            Sign up
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
const LoginBtn = styled.button<{ bgColor?: string; color?: string }>`
  flex: 1;
  border: none;
  background-color: ${(props) => props.bgColor || "#2F2F2F"};
  color: ${(props) => props.color || "#FFFFFF"};
`;
