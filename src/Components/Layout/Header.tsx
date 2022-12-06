import styled from "styled-components";
import { theme } from "~/theme";

export default function Header() {
  return (
    <Nav>
      <Logo>LOGO</Logo>
      <MenuBox>
        <Menu>Home</Menu>
        <Menu>About us</Menu>
        <Menu>Services</Menu>
        <Menu>Blog</Menu>
      </MenuBox>
      <MenuBox>
        <Menu active={true}>Login</Menu>
      </MenuBox>
    </Nav>
  );
}

interface IMenuProps {
  active?: boolean;
}

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 28px;
  height: 135px;
  border-bottom: 1px solid ${theme.primaryColor};
  background-color: #ffffff;
`;
const Logo = styled.h1`
  font-size: 32px;
  font-weight: 500;
  color: ${theme.primaryColor};
`;
const MenuBox = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
`;
const Menu = styled.div<IMenuProps>`
  font-size: 16px;
  font-weight: 500;
  opacity: 50%;
  color: ${theme.primaryColor};
  ${(props) =>
    props.active &&
    `border-bottom: solid 2px ${theme.accentColor}; opacity: 1;`}
`;
