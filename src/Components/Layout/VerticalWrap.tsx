import styled from "styled-components";

export default function VerticalWrap() {
  return (
    <>
      <VerticalContainer>
        <LeftSection></LeftSection>
        <MainSection></MainSection>
      </VerticalContainer>
    </>
  );
}

const VerticalContainer = styled.div`
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
