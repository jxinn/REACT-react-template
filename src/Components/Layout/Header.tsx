import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { theme } from "~/theme";

export default function Header() {
  const { pathname } = useLocation();
  const mainColor = pathname === "/" ? theme.bgColor : "";
  const mainbBgColor = pathname === "/" ? theme.primaryColor : "";
  return (
    <Nav bgcolor={mainbBgColor}>
      <NavBox>
        <Logo color={mainColor}>LOGO</Logo>
        <MenuBox color={mainColor}>
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

const Nav = styled.div<{ bgcolor?: string }>`
  display: flex;
  align-items: center;
  height: 135px;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  background-color: ${(props) =>
    props.bgcolor ? props.bgcolor : props.theme.bgColor};
`;
const NavBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
`;
const Logo = styled.h1<{ color?: string }>`
  font-size: 32px;
  font-weight: 500;
  color: ${(props) => (props.color ? props.color : props.theme.primaryColor)};
`;
const MenuBox = styled.div<{ color?: string }>`
  display: flex;
  align-items: center;
  gap: 60px;
  color: ${(props) => (props.color ? props.color : props.theme.primaryColor)};
`;
const Menu = styled(Link)<{ active?: boolean }>`
  font-size: 16px;
  font-weight: 500;
  opacity: 50%;
  padding-bottom: 1px;
  ${(props) =>
    props.active &&
    `box-shadow: inset 0 -2px 0 0 ${props.theme.accentColor}; opacity: 1;`}
  &:last-child {
    margin-left: 40px;
  }
`;
