import styled from "styled-components";
import { theme } from "../../theme";
import Footer from "./Footer";
import Header from "./Header";

interface ILayoutProps {
  children: React.ReactElement;
}
export default function Layout({ children }: ILayoutProps) {
  return (
    <>
      <Header />
      <Container>
        <Content>{children}</Content>
      </Container>
      <Footer />
    </>
  );
}

const Container = styled.div`
  display: flex;
  min-height: calc(100vh - 55px);
  background-color: ${theme.bgColor};
`;
const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
