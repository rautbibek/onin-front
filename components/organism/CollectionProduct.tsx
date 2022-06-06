import styled from "styled-components";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import axios from "axios";
import { useQuery } from "react-query";
import Card from "../molicules/Card";

const CollectionContainer = styled.div`
  margin: 10px 0px;
  & .collection-header {
    width: 100%;
    display: flex;
    /* margin-bottom: 10px; */
    align-items: center;
    /* background-color: #e3e3e3; */
    /* border-bottom: 1px solid #c5c1c1; */
    padding: 7px;
    & h3 {
      font-weight: 500;
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
    return axios.get(
      "https://system.onininternational.com/api/v1/all/collection"
    );
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
          <div className="product">
            {collection.product.map((product: any) => (
              <Card key={product.id}></Card>
            ))}
          </div>
        </>
      ))}
    </CollectionContainer>
  );
};
export default CollectionProduct;
