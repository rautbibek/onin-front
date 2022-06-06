import styled from "styled-components";
import {
  RocketOutlined,
  ReloadOutlined,
  SyncOutlined,
  FireOutlined,
  LaptopOutlined,
  CarOutlined,
} from "@ant-design/icons";
const SiteOptionContainer = styled.section`
  min-height: 200px;
  border: 1px solid grey;
  margin: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  & div > h3 {
    text-transform: capitalize;
    font-weight: bold;
  }
  @media (max-width: 760px) {
    display: none;
    flex-direction: column;
    gap: 5px;
  }
`;
const SiteOption = () => {
  return (
    <SiteOptionContainer>
      <div>
        <RocketOutlined
          style={{
            fontSize: "60px",
            transform: "rotate(30deg)",
            color: "#fcb800",
          }}
        />
        <h2>title</h2>
        <p>Information</p>
      </div>
      <div>
        <SyncOutlined
          style={{
            fontSize: "60px",

            color: "#fcb800",
          }}
        />
        <h2>title</h2>
        <p>Information</p>
      </div>
      <div>
        <FireOutlined
          style={{
            fontSize: "60px",

            color: "#fcb800",
          }}
        />
        <h2>title</h2>
        <p>Information</p>
      </div>
      <div>
        <LaptopOutlined
          style={{
            fontSize: "60px",

            color: "#fcb800",
          }}
        />
        <h2>title</h2>
        <p>Information</p>
      </div>
      <div>
        <ReloadOutlined
          style={{
            fontSize: "60px",

            color: "#fcb800",
          }}
        />
        <h2>title</h2>
        <p>Information</p>
      </div>
      <div>
        <CarOutlined
          style={{
            fontSize: "60px",

            color: "#fcb800",
          }}
        />
        <h2>title</h2>
        <p>Information</p>
      </div>
    </SiteOptionContainer>
  );
};
export default SiteOption;
