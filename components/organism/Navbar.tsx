import { Menu, Row, Col } from "antd";
import styled from "styled-components";
const NavbarWrapper = styled.nav`
  background-color: #fcb800 !important;
  border-top: 1px solid #0600004f;
  border-width: thin;
  display: flex;
  justify-content: space-between;
  .ant-menu-title-content {
    color: black;
  }
  .sub-mega-menu {
    display: flex;
    justify-content: space-between;
  }
  .desktop {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .right-menu {
    margin-right: 20px;
    display: flex;
    li {
      list-style: none;
      border-right: 1px solid black;
      padding: 0px 20px;
      cursor: pointer;
    }
  }
  @media (max-width: 768px) {
    .right-menu {
      display: none;
    }
  }
`;
import { AppstoreOutlined, MenuOutlined } from "@ant-design/icons";
import axios from "axios";
import { useQuery } from "react-query";
import axiosClient from "../../axios/axios";
const Navbar = () => {
  const getCategory = () => {
    return axiosClient.get("/category");
  };

  const { isLoading, isFetching, data, isError } = useQuery(
    "categories",
    getCategory
  );

  return (
    <NavbarWrapper>
      <div className="desktop">
        <div className="main-menu">
          <Menu
            className="menu"
            mode="horizontal"
            style={{ position: "relative" }}
          >
            <Menu.SubMenu
              style={{ top: "0px" }}
              key="SubMenu"
              title="Shop By Categories"
              icon={<MenuOutlined />}
            >
              {data?.data.data.map((cat: any) =>
                cat.children.length > 0 ? (
                  <Menu.SubMenu key={cat.id} title={cat.name}>
                    <Row
                      gutter={[8, 8]}
                      justify="start"
                      style={{
                        minHeight: "300px",
                        minWidth: "900px",
                      }}
                    >
                      {cat?.children.map((item: any) => (
                        <Col span={8} key={item.id}>
                          <Menu.Item
                            style={{
                              lineHeight: "20px",
                            }}
                            className="hoverable"
                          >
                            <strong style={{ textTransform: "capitalize" }}>
                              {item.name}
                            </strong>
                            {item.children.map((smenu: any) => (
                              <p key={smenu.id}>{smenu.name}</p>
                            ))}
                          </Menu.Item>
                        </Col>
                      ))}
                    </Row>
                  </Menu.SubMenu>
                ) : (
                  <Menu.Item
                    style={{
                      width: "250px",
                      height: "30px",
                      lineHeight: "20px",
                    }}
                    className="hoverable"
                    key={cat.id}
                  >
                    {cat.name}
                  </Menu.Item>
                )
              )}
            </Menu.SubMenu>
          </Menu>
        </div>
        <div className="right-menu">
          <li>Track you order</li>
          <li>view your order</li>
          <li>Nepal</li>
        </div>
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;
