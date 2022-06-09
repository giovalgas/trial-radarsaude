import {Avatar, Button, List, Pagination, Skeleton} from 'antd';
import React, { useEffect, useState } from 'react';

interface DataType {
    gender?: string;
    name: {
        title?: string;
        first?: string;
        last?: string;
    };
    email?: string;
    picture: {
        large?: string;
        medium?: string;
        thumbnail?: string;
    };
    nat?: string;
    loading: boolean;
}

let pageSize = 10;
const fakeDataUrl = `https://randomuser.me/api/?results=${pageSize}&inc=name,gender,email,nat,picture&noinfo`;

export const ListComponent: React.FC = () => {

    const [initLoading, setInitLoading] = useState(true);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<DataType[]>([]);
    const [list, setList] = useState<DataType[]>([]);

    useEffect(() => {
        fetch(fakeDataUrl)
            .then(res => res.json())
            .then(res => {
                setInitLoading(false);
                setData(res.results);
                setList(res.results);
            });
    }, []);

    const onLoadMore = () => {
        setLoading(true);
        setList(
            data.concat([...new Array(pageSize)].map(() => ({ loading: true, name: {}, picture: {} }))),
        );
        fetch(fakeDataUrl)
            .then(res => res.json())
            .then(res => {
                const newData = data.concat(res.results);
                setData(newData);
                setList(newData);
                setLoading(false);
                window.dispatchEvent(new Event('resize'));
            });
    };

    return (
        <>
            <List
                className="demo-loadmore-list"
                loading={initLoading}
                itemLayout="horizontal"
                // loadMore={loadMore}
                dataSource={list}
                renderItem={item => (
                    <List.Item
                        actions={[<a key="list-loadmore-edit">edit</a>]}
                    >
                        <Skeleton avatar title={false} loading={item.loading} active>
                            <List.Item.Meta
                                avatar={<Avatar src={item.picture.large} />}
                                title={<a href="https://ant.design">{item.name?.last}</a>}
                                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                            />
                        </Skeleton>
                    </List.Item>
                )}
            />
            <Pagination
                total={85}
                showTotal={total => `Temos ${total} pessoas cadastradas`}
                style={{textAlign: "center", marginTop: "1rem"}}
                defaultPageSize={pageSize}
                onShowSizeChange={(size) => {
                    pageSize = size
                    onLoadMore()
                }}
                defaultCurrent={1}
            />
        </>
    );
}