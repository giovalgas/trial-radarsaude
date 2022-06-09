import React, {useEffect, useState} from 'react';
import {Breadcrumb} from "antd";
import {ResponsivePieComponent} from "../graphic/ResponsivePieComponent";

export const StatisticsPageComponent: React.FC = () => {

    let url = new URL(`http://localhost:8080/api/v1/person/stats/gender-ratio`)
    const [ data, setData ] = useState()

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(res => {
                setData(res)
            })
    }, []);

    return (
        <>
            <Breadcrumb style={{margin: '16px 0',}}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>Statisticas</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-content" style={{
                height: "80vh",
                width: "95vw",
                margin: "auto"
            }}>
                {data && <ResponsivePieComponent data={data} ></ResponsivePieComponent>}
            </div>
        </>
    );
}