import {Avatar, Button, List, Pagination, Skeleton} from 'antd';
import React, { useEffect, useState } from 'react';
import {UserOutlined} from "@ant-design/icons";
import {FilterFormComponent} from "./FilterFormComponent";

interface Person {
    id: number
    name: string
    gender: string
    phoneNumber: string
    email: string
    birthDate: string
    enabled: boolean
}

interface Filter {
    name: string
    email: string
    enabled: boolean
    gender: "ANY"|"MALE"|"FEMALE"|"OTHER"
}

export const ListComponent: React.FC = () => {

    const avatarColors = ['red','orange','green','blue','purple']
    const defaultPageSize: number = 10
    let url = new URL(`http://localhost:8080/api/v1/person/`)

    const [initLoading, setInitLoading] = useState(true);
    const [loading, setLoading] = useState(false);
    const [list, setList] = useState<Person[]>([]);
    const [pageSize, setPageSize] = useState(0)

    url.search = new URLSearchParams({
        pageSize: defaultPageSize.toString(),
        gender: "ANY",
        enabled: "true"
    }).toString()

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(res => {
                setInitLoading(false);
                setList(res.content);
                setPageSize(res.numberOfElements)
            });
    }, []);

    const loadPage = (page: number, pageSize: number, filter?: Filter) => {
        setLoading(true);
        if (filter !== undefined) {
            url.search = new URLSearchParams({
                pageSize: pageSize.toString(),
                page: page.toString(),
                name: filter.name,
                email: filter.email,
                gender: "ANY",
                enabled: filter.enabled.toString()
            }).toString()
        }
        fetch(url)
            .then(res => res.json())
            .then(res => {
                setList(res.content);
                setPageSize(res.numberOfElements)
                setLoading(false);
                window.dispatchEvent(new Event('resize'));
            });
    };

    return (
        <>
            <FilterFormComponent onFinish={ (values) => {
                loadPage(1, defaultPageSize, values)
            }} />
            <List
                className="demo-loadmore-list"
                loading={initLoading}
                itemLayout="horizontal"
                dataSource={list}
                renderItem={item => (
                    <List.Item
                        actions={[<a href={"./edit-person/" + item.id} key="list-loadmore-edit">edit</a>]}
                    >
                        <Skeleton avatar title={false} loading={loading} active>
                            <List.Item.Meta
                                avatar={<Avatar style={{backgroundColor: avatarColors[Math.floor(Math.random() * (5 + 1))]}} icon={<UserOutlined />} />}
                                title={<label style={{
                                    color:  item.enabled ? "blue" : "red"
                                }}>{item.name}</label>}
                                description={"Email: " + item.email + "; Telefone: " + item.phoneNumber}
                            />
                        </Skeleton>
                    </List.Item>

                )}
            />
            <Pagination
                total={pageSize}
                showTotal={total => `Achei ${total} pessoas`}
                style={{textAlign: "center", marginTop: "1rem"}}
                defaultPageSize={defaultPageSize}
                onChange={loadPage}
                defaultCurrent={1}
            />
        </>
    );
}