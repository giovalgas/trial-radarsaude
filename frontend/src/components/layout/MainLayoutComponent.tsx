import React from 'react';

import {
    BarChartOutlined,
    UploadOutlined,
    UserOutlined,
} from '@ant-design/icons';

import {
    Layout,
    Menu,
    MenuProps
} from 'antd';

import {
    BrowserRouter as Router,
    Link,
    Routes,
    Route
} from 'react-router-dom'

const { Header, Content, Footer } = Layout;

const items: MenuProps["items"] = [
    {
        icon: <UserOutlined />,
        key: "people",
        label: (
            <Link to={"/people"}>Pessoas</Link>
        )
    },
    {
        icon: <UploadOutlined />,
        key: "add-person",
        label: (
            <Link to={"/register-person"}>Cadastrar pessoa</Link>
        )
    },
    {
        icon: <BarChartOutlined />,
        key: "statistics",
        label: (
            <Link to={"/statistics"}>Statisticas</Link>
        )
    }
]

interface Props{
    children?: any;
}

export const MainLayoutComponent: React.FC<Props> = (Props) => {
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
            <Content style={{padding: '0 50px',}}>
                {Props.children}
            </Content>
            <Footer style={{textAlign: 'center',}}>
                Radar Saude ©2022 Created by Giovani Valgas
            </Footer>
        </Layout>
    );
}