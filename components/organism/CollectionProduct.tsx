import styled from "styled-components";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import axios from "axios";
import axiosClient from "../../axios/axios";
import { useQuery } from "react-query";
import Card from "../molicules/Card";
import Row from "../atom/row";
const CollectionContainer = styled.div`
  min-height: 200px;
  margin: 60px 20px;
  & .collection-content {
    margin-top: 50px;
    margin-bottom: 50px;
  }
  & .collection-header {
    width: 100%;
    display: flex;
    align-items: center;
    background-color: #f4f4f4;
    border-bottom: 1px solid #e3e3e3;
    padding: 15px;
    & h3 {
      font-size: 20px;
      font-weight: 500;
      line-height: 1;
      padding: 0px;
      margin: 0px;
      text-transform: capitalize;
    }
  }
  & .product {
    /* margin-top: 100px;
    margin-bottom: 100px; */
  }
`;
const CollectionProduct = () => {
  const allCollection = () => {
    return axiosClient.get("/all/collection");
  };
  const onSuccess = () => {
    console.log("success");
  };
  const onError = () => {
    console.log("error");
  };
  const { isLoading, isFetching, data, isError } = useQuery(
    "collection",
    allCollection,
    {
      onSuccess,
      onError,
    }
  );

  return (
    <CollectionContainer>
      {data?.data.data.map((collection: any) => (
        <>
          <div className="collection-header">
            <h3>{collection.name}</h3>
          </div>
          <div className="collection-content">
            <Row>
              {collection.product.map((product: any) => (
                <Card key={product.id} product={product}></Card>
              ))}
            </Row>
          </div>
        </>
      ))}
    </CollectionContainer>
  );
};
export default CollectionProduct;
