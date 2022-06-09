import {Breadcrumb, Button, DatePicker, Form, Input, Select} from 'antd';
import React from 'react';

interface Props {
    isEditing?: boolean
    editingId?: number
}

const { Option } = Select;

export const ManagePersonPageComponent: React.FC<Props> = (props) => {

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
                        label="Gender"
                    >
                        <Select
                            placeholder={"Selecione o seu gênero/sexo"}
                            style={{maxWidth: "16rem"}}
                        >
                            <Option value="MALE">Homem</Option>
                            <Option value="FEMALE">Mulher</Option>
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
                        <Button type="primary" style={{alignSelf: "center", marginRight: "1rem"}}>Submit</Button>
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