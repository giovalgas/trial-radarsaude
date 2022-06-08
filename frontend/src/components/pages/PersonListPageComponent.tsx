import React from 'react';
import {Breadcrumb} from "antd";

export const PersonListPageComponent: React.FC = () => {
    return (
        <>
            <Breadcrumb style={{margin: '16px 0',}}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>Pessoas</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-content">
                Content

            </div>
        </>
    );
}