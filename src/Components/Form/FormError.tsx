import styled from "styled-components";

interface IFormErrorProps {
  message: string;
}
export default function FormError({ message }: IFormErrorProps) {
  return (
    <>
      <ErrorBox>{message}</ErrorBox>
    </>
  );
}

const ErrorBox = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 24px;
  color: #ff0000;
`;
