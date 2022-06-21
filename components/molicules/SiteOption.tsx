import styled from "styled-components";
import {
  MoneyCollectOutlined,
  ReloadOutlined,
  SyncOutlined,
  CommentOutlined,
  LaptopOutlined,
  CarOutlined,
} from "@ant-design/icons";
const SiteOptionContainer = styled.section`
  display: flex;
  border-bottom: 1px solid #f5f5f5;
  justify-content: space-between;
  align-items: center;

  & div {
    text-align: center;
    padding: 10px;
    display: flex;
    gap: 10px;
    justify-content: space-between;
    align-items: center;

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
        <MoneyCollectOutlined
          style={{
            fontSize: "40px",
            fontWeight: "300",
            color: "#fcb800",
          }}
        />
        Lowest Price Guarantee
      </div>
      <div>
        <SyncOutlined
          style={{
            fontSize: "40px",

            color: "#fcb800",
          }}
        />
        Free Shipping
      </div>
      <div>
        <CommentOutlined
          style={{
            fontSize: "40px",

            color: "#fcb800",
          }}
        />
        24x7 Support
      </div>
      <div>
        <LaptopOutlined
          style={{
            fontSize: "40px",
            fontWeight: "200",
            color: "#fcb800",
          }}
        />
        100% Satisfaction
      </div>
      <div>
        <ReloadOutlined
          style={{
            fontSize: "40px",
            color: "#fcb800",
          }}
        />
        7 Days Return
      </div>
    </SiteOptionContainer>
  );
};
export default SiteOption;
