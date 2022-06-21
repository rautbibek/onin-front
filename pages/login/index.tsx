import styled from "styled-components";
import { Button, Checkbox, Form, Input } from "antd";
const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  & .login {
    min-height: 300px;
    border: 1px solid black;
  }
`;
const CustomInput = styled(Input)`
  background: red;
`;
const Login = () => {
  const onFinish = (values: any) => {
    //console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    //console.log("Failed:", errorInfo);
  };
  return (
    <LoginContainer>
      <div className="login">
        <Form
          name="basic"
          layout="vertical"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </LoginContainer>
  );
};
export default Login;
