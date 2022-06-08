import Row from "../atom/row";
import axiosClient from "../../axios/axios";
import { useQuery } from "react-query";
import Card from "../molicules/Card";
import styled from "styled-components";
const ProductContainer = styled.div`
  margin: 60px 20px;
  .header-title {
    width: 100%;
    display: flex;
    align-items: center;
    background-color: #f4f4f4;
    border-bottom: 1px solid #e3e3e3;
    padding: 15px;
    & .title-text {
      font-size: 20px;
      font-weight: 500;
      line-height: 1;
      padding: 0px;
      margin: 0px;
      text-transform: capitalize;
    }
  }
`;
const AllProduct = () => {
  const products = () => {
    return axiosClient.get("/products");
  };

  const { isLoading, isFetching, data, isError } = useQuery(
    "products",
    products
  );
  return (
    <ProductContainer>
      <div className="header-title">
        <h3 className="title-text">Browse Popular Products</h3>
      </div>
      <Row>
        {data?.data.data.map((product: any) => (
          <Card key={product.id} product={product}></Card>
        ))}
      </Row>
    </ProductContainer>
  );
};
export default AllProduct;
