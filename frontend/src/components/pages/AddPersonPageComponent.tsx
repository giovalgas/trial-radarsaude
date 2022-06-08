import React from 'react';
import {Breadcrumb} from "antd";

export const AddPersonPageComponent: React.FC = () => {
    return (
        <>
            <Breadcrumb style={{margin: '16px 0',}}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>Adicionar Pessoa</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-content">
                Content

            </div>
        </>
    );
}