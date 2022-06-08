import React from 'react';
import 'antd/dist/antd.css';
import './index.css';

import {
  BarChartOutlined,
  UploadOutlined,
  UserOutlined,
} from '@ant-design/icons';
import {Breadcrumb, Layout, Menu, MenuProps} from 'antd';
const { Header, Content, Footer } = Layout;


const items: MenuProps["items"] = [
    {icon: UserOutlined, key: "Pessoas"}, {icon: UploadOutlined, key: "Adicionar pessoa"}, {icon: BarChartOutlined, key: "Statisticas"}
].map((i, index) => ({
  key: String(index + 1),
  icon: React.createElement(i.icon),
  label: `${i.key}`,
}));

function App() {

  return (
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              items={items}
          />
        </Header>
        <Content
            style={{
              padding: '0 50px',
            }}
        >
          <Breadcrumb
              style={{
                margin: '16px 0',
              }}
          >
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Pessoas</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">Content</div>
        </Content>
        <Footer
            style={{
              textAlign: 'center',
            }}
        >
          Radar Saude ©2022 Created by Giovani Valgas
        </Footer>
      </Layout>
  );
}

export default App;
