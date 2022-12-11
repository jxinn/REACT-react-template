import React from "react";
import styled from "styled-components";

interface IInputWrapProps {
  children: React.ReactElement;
}
export default function InputWrap({ children }: IInputWrapProps) {
  return (
    <>
      <InputBox>{children}</InputBox>
    </>
  );
}

const InputBox = styled.div`
  display: flex;
  align-items: center;
  width: 310px;
  height: 44px;
  border-bottom: 1px solid #6a6a6a;

  .inp {
    font-size: 14px;
    color: #6a6a6a;
    width: 100%;
    border: none;
    height: 40px;
  }
`;
