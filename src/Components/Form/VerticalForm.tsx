import styled from "styled-components";
import aside from "@Assets/aside.png";

interface IVerticalFormProps {
  children: React.ReactNode;
}
export default function VerticalForm({ children }: IVerticalFormProps) {
  return (
    <>
      <Wrap>
        <Aside></Aside>
        <Section>{children}</Section>
      </Wrap>
    </>
  );
}

const Wrap = styled.div`
  display: flex;
  position: absolute;
  width: 845px;
  height: 550px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  background-color: #ffffff;
`;
const Aside = styled.div`
  flex: 1;
  background-image: url("${aside}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
const Section = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
