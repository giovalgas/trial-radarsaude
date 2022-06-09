import React from "react";
import {Button, Form, Input, Switch} from 'antd';

interface Props {
    onFinish(values: any): any
}

export const FilterFormComponent: React.FC<Props> = (Props) => {

    return (
        <>
            <Form
                style={{display: "flex", justifyContent: "center"}}
                layout={"inline"}
                onFinish={Props.onFinish}
            >
                <Form.Item
                    label="Email"
                    initialValue={""}
                    name={"email"}
                >
                    <Input placeholder="Filtro email" />
                </Form.Item>

                <Form.Item
                    label="Nome"
                    initialValue={""}
                    name={"name"}
                    style={{marginBottom: "1rem"}
                }>
                    <Input placeholder="Filtro nome" />
                </Form.Item>

                <Form.Item
                    label="Mostrar somente ativos"
                    initialValue={true}
                    name={"enabled"}
                >
                    <Switch defaultChecked/>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" >Pesquisar</Button>
                </Form.Item>

            </Form>
        </>
    )
}