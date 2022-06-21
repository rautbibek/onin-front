import styled from "styled-components";
import { Input, Space, Button } from "antd";
import Navbar from "./Navbar";
import Search from "../molicules/Search";
import {
  AudioOutlined,
  UserOutlined,
  ShoppingCartOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import Router from "next/router";
const Header = styled.div`
  min-height: 100px;
  background-color: #fcb800;
  & .header-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    & .header-content {
    }
  }

  h1 > span {
    color: white;
  }
  .search {
    width: 600px;
  }
  .title {
    cursor: pointer;
    font-weight: 600;
    font-style: oblique;
  }
  .hoverable:hover {
    color: white;
  }
  .menu {
    background-color: #fcb800;

    color: black;
  }

  .hoverable {
    color: black;
    font-weight: bold;
  }
  @media (max-width: 768px) {
    .search-bar {
      display: none;
    }
  }
  @media (max-width: 425px) {
    .option-icons {
      display: none;
    }
  }
`;
const PageHeader = () => {
  return (
    <header>
      <Header>
        <div className="header-top">
          <div className="header-conternt">
            <h1
              className="title"
              onClick={() => {
                Router.push("/");
              }}
            >
              Onin<span>International</span>
            </h1>
          </div>
          <div className="header-conternt search-bar">
            <Search />
          </div>
          <div className="header-content option-icons">
            <Space>
              <Button
                shape="circle"
                size="large"
                type="text"
                color="black"
                className="hoverable"
                icon={
                  <AudioOutlined style={{ fontSize: "25px", color: "back" }} />
                }
              />

              <Button
                shape="circle"
                size="large"
                type="text"
                color="black"
                className="hoverable"
                icon={
                  <ShoppingCartOutlined
                    style={{ fontSize: "25px", color: "back" }}
                  />
                }
              />
              <Button
                shape="circle"
                size="large"
                type="text"
                color="black"
                className="hoverable"
                icon={
                  <HeartOutlined style={{ fontSize: "25px", color: "back" }} />
                }
              />
              <Button
                shape="circle"
                size="large"
                type="text"
                color="black"
                className="hoverable"
                icon={
                  <UserOutlined style={{ fontSize: "25px", color: "back" }} />
                }
              />
              <div>
                <a
                  onClick={() => {
                    Router.push("/login");
                  }}
                  className="hoverable"
                >
                  Login
                </a>
                <br />
                <a
                  onClick={() => {
                    Router.push("/register");
                  }}
                  className="hoverable"
                >
                  Register
                </a>
              </div>
            </Space>
          </div>
        </div>
        <Navbar></Navbar>
      </Header>
    </header>
  );
};

export default PageHeader;
