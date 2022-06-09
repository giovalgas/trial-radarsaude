import {Alert, Breadcrumb, Button, DatePicker, Form, Input, Select} from 'antd';
import React, {useEffect, useState} from 'react';

interface Person {
    id: number
    name: string
    gender: string
    phoneNumber: string
    email: string
    birthDate: string
    enabled: boolean
}

interface Props {
    isEditing?: boolean
    editingId?: number
}

interface Completion {
    isComplete: boolean
    status?: "CREATE_SUCCESS"|"FAILED"|"EDIT_SUCCESS"
}

const { Option } = Select;

export const ManagePersonPageComponent: React.FC<Props> = (props) => {

    const url = new URL('http://localhost:8080/api/v1/person/')

    function editPerson(values: Person, id: number) {

    }

    function createPerson(values: Person) {
        fetch(url, {method: "POST", body: JSON.stringify(values), headers: {'Content-Type': "application/json"}})
            .then(res => {
                if(res.status == 200) {
                    alert("Usuario criado com sucesso")
                }else {
                    alert("Erro ao criar usuario")
                }
            });
    }

    return (
        <div>
            <Breadcrumb style={{margin: '16px 0'}}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>Adicionar Pessoa</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-content">

                <Form
                    layout={"vertical"}
                    labelCol={{xxl: { span: 16, offset: 8 } }}
                    wrapperCol={{xxl: { span: 16, offset: 8 } }}
                    size={"middle"}
                    onFinish={(values) => {
                        if(props.isEditing && props.editingId !== undefined) {
                            editPerson(values, props.editingId)
                        }else {
                            createPerson(values)
                        }
                    }}
                    initialValues={{ remember: true }}
                    autoComplete="off"
                >

                    <Form.Item
                        rules={[{ required: true, message: "Favor digitar seu nome completo!"}]}
                        label="Nome completo"
                        name="name"
                    >
                        <Input placeholder="Seu nome" style={{maxWidth: "40rem"}}/>
                    </Form.Item>

                    <Form.Item
                        rules={[
                            {
                                required: true,
                                message: "Favor digitar seu email!"
                            },
                            {
                                pattern: new RegExp('^.+@.+\\..+$'),
                                message: "Email invalido!"
                            }

                        ]}
                        label="Email"
                        name="email"
                    >
                        <Input placeholder="Seu email" style={{maxWidth: "40rem"}}/>
                    </Form.Item>

                    <Form.Item
                        rules={[
                            {
                                required: true,
                                message: "Favor digitar seu numero de celular!"
                            },
                            {
                                pattern: new RegExp('^\\(?[1-9]{2}\\)? ?(?:[2-8]|9[1-9])\\d{3}-?\\d{4}$'),
                                message: "Numero invalido!"
                            }
                        ]}
                        label="Numero de celular"
                        name="phoneNumber"
                    >
                        <Input placeholder="Seu celular" style={{maxWidth: "40rem"}}/>
                    </Form.Item>

                    <Form.Item
                        rules={[{required: true, message: "Selecione o seu gênero!"}
                        ]}
                        name="gender"
                        label="Gênero / Sexo"
                    >
                        <Select
                            placeholder={"Selecione o seu gênero/sexo"}
                            style={{maxWidth: "16rem"}}
                        >
                            <Option value="MALE">Masculino</Option>
                            <Option value="FEMALE">Feminino</Option>
                            <Option value="OTHER">Outro</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        rules={[{ required: true, message: "Selecione sua data de nascimento!"}]}
                        name="birthDate"
                        label="Data de Nascimento"
                    >
                        <DatePicker placeholder={"Selecione uma data"}/>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" style={{alignSelf: "center", marginRight: "1rem"}}>Submit</Button>
                        <Button
                            type="primary"
                            style=
                                {{
                                    visibility: props.isEditing ? 'visible' : 'hidden',
                                    alignSelf: "center",
                                    backgroundColor: "darkred",
                                    borderColor: "red"
                                }}
                        >
                            Delete Person
                        </Button>
                    </Form.Item>

                </Form>



            </div>
        </div>
    );
}