import styled from "styled-components";
import { Input, Button } from "antd";
const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .input {
    height: 45px;
    width: 450px;
    :focus {
      border: none;
    }
    :hover {
      border: none;
    }
  }
  .btn {
    height: 45px;
    padding: 10px;
    background-color: black;
    color: white;
    width: 100px;
    border-radius: 0px 5px 5px 0px;
    border: none;
    font-weight: bold;
  }
`;
const Search = () => {
  return (
    <SearchContainer>
      <Input className="input"></Input>
      <Button className="btn">Search</Button>
    </SearchContainer>
  );
};
export default Search;
