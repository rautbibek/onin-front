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
`;
import { AppstoreOutlined, MenuOutlined } from "@ant-design/icons";
import axios from "axios";
import { useQuery } from "react-query";
const Navbar = () => {
  const getCategory = () => {
    return axios.get("https://system.onininternational.com/api/v1/category");
  };
  const onSuccess = () => {
    console.log("success");
  };
  const onError = () => {
    console.log("error");
  };
  const { isLoading, isFetching, data, isError } = useQuery(
    "categories",
    getCategory,
    {
      onSuccess,
      onError,
    }
  );

  return (
    <NavbarWrapper>
      <div>
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
                          key={item.id}
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
    </NavbarWrapper>
  );
};

export default Navbar;
