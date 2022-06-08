import styled from "styled-components";
const CardContainer = styled.div`
  margin: 0 -5px;
  padding: 20px;

  /* background-color: red; */
  :after {
    content: "";
    display: table;
    clear: both;
  }
`;
const Row = (props: any) => {
  return <CardContainer>{props.children}</CardContainer>;
};
export default Row;
