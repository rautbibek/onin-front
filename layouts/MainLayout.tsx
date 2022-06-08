import PageHeader from "../components/organism/PageHeader";
import PageFooter from "../components/organism/PageFooter";
import styled from "styled-components";
const Main = styled.main`
  min-height: 400px;
  background-color: #fff;
  /* @media (min-width: 1400px) {
    width: 1420px;
  } */
`;

const MainLayout = (props: any) => {
  return (
    <div>
      <PageHeader />
      <Main>{props.children}</Main>
      <PageFooter />
    </div>
  );
};

export default MainLayout;
