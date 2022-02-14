import './App.css';

import { Layout, Menu, Breadcrumb, Typography, Row, Col, Card} from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { useState } from 'react';
import Title from 'antd/lib/typography/Title';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function App() {

  const [collapsed, setCollapsed] = useState(false);

  return (
    <div>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={() => setCollapsed(!collapsed)}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
                Home
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
             Manage Resources
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="User">
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />}>
              Files
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" 
            style={{ padding: 24, minHeight: 360 }}>
              <Title>DASHBOARD</Title>
              <div style={{display: "flex", justifyContent: "space-between"}}>
                <Card style={{flex: "1", height: "400px"}}> Total Users</Card>
                <Card style={{flex: "1", height: "400px"}}> Total Rooms</Card>
                <Card style={{flex: "1", height: "400px"}}> Organizations</Card>
                <Card style={{flex: "1", height: "400px"}}> Rooms Available</Card>
              
              </div>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ezra ©2022,  All rights reserved</Footer>
        </Layout>
      </Layout>
      
    </div>
  );
}

export default App;