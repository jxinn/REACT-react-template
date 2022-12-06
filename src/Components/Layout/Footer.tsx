import styled from "styled-components";
import { theme } from "~/theme";

export default function Footer() {
  return <Foot>Copyrightⓒ 2022 GHP Group Co., Ltd. All Rights Reserved.</Foot>;
}

const Foot = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  font-size: 13px;
  font-weight: 400;
  border-top: 1px solid ${theme.primaryColor};
  color: #6a6a6a;
`;
