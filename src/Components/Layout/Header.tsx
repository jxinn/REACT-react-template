import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Header() {
  return (
    <Nav>
      <NavBox>
        <Logo>LOGO</Logo>
        <MenuBox>
          <Menu to="/">Home</Menu>
          <Menu to="/about">About us</Menu>
          <Menu to="/service">Services</Menu>
          <Menu to="/blog">Blog</Menu>
          <Menu to="/login" active={true}>
            Login
          </Menu>
        </MenuBox>
      </NavBox>
    </Nav>
  );
}

interface IMenuProps {
  active?: boolean;
}

const Nav = styled.div`
  display: flex;
  align-items: center;
  height: 135px;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  background-color: ${(props) => props.theme.bgColor};
`;
const NavBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
`;
const Logo = styled.h1`
  font-size: 32px;
  font-weight: 500;
  color: ${(props) => props.theme.primaryColor};
`;
const MenuBox = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
`;
const Menu = styled(Link)<IMenuProps>`
  font-size: 16px;
  font-weight: 500;
  opacity: 50%;
  padding-bottom: 1px;
  color: ${(props) => props.theme.primaryColor};
  ${(props) =>
    props.active &&
    `box-shadow: inset 0 -2px 0 0 ${props.theme.accentColor}; opacity: 1;`}
  &:last-child {
    margin-left: 40px;
  }
`;
