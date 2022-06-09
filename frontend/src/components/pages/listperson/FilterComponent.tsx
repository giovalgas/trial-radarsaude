import React from "react";
import {Button, Checkbox, Form, Input} from 'antd';

export let url = ""

export const FilterComponent: React.FC = () => {
    return (
        <>
            <Form
                style={{display: "flex", justifyContent: "center"}}
                layout={"inline"}
            >
                <Form.Item
                    label="Email"
                    name={"email"}
                >
                    <Input placeholder="Filtro email" />
                </Form.Item>

                <Form.Item
                    label="Nome"
                    name={"name"}
                    style={{marginBottom: "1rem"}
                }>
                    <Input placeholder="Filtro nome" />
                </Form.Item>

                <Form.Item
                    label="Mostrar excluidos"
                    name={"enabled"}
                >
                    <Checkbox/>
                </Form.Item>

                <Form.Item>
                    <Button type="primary">Pesquisar</Button>
                </Form.Item>

            </Form>
        </>
    )
}