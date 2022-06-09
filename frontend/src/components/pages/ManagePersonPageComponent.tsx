import { Breadcrumb, Button, DatePicker, Form, Input, Select} from 'antd';
import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import moment from 'moment';

interface Person {
    id?: number
    name: string
    gender: string
    phoneNumber: string
    email: string
    birthDate: string
    enabled?: boolean
}

interface Props {
    isEditing?: boolean
}

const { Option } = Select;

export const ManagePersonPageComponent: React.FC<Props> = (props) => {

    const [ form ] = Form.useForm();

    const url = new URL('http://localhost:8080/api/v1/person/')
    const { id } = useParams();

    useEffect(() => {
        if(props.isEditing) {
            fetch(url + "" + id)
                .then(res => res.json())
                .then(res => {
                    form.setFieldsValue({
                        name: res.name,
                        email: res.email,
                        phoneNumber: res.phoneNumber,
                        gender: res.gender,
                        birthDate: moment(res.birthDate)
                    })
                });
        }
    }, [])


    function editPerson(values: Person, id: string) {
        fetch(
            url + "" + id,
            {
                method: "PUT", body: JSON.stringify(values),
                headers: {'Content-Type': "application/json"}
            }
        ).then(res => {
            if(res.ok) {
                alert("Usuario editado com sucesso")
            }else {
                alert("Erro ao editar usuario")
            }
        });
    }

    function createPerson(values: Person) {
        fetch(url, {method: "POST", body: JSON.stringify(values), headers: {'Content-Type': "application/json"}})
            .then(res => {
                if(res.ok) {
                    alert("Usuario criado com sucesso")
                    form.resetFields()
                }else {
                    alert("Erro ao criar usuario")
                }
            });
    }

    function deletePerson(id: string) {
        fetch(url + "" + id, { method: "DELETE" })
            .then(res => {
                if(res.ok) {
                    alert("Usuario deletado com sucesso")
                }else {
                    alert("Erro ao deletar usuario")
                }
            })
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
                        if(props.isEditing && id !== undefined) {
                            editPerson(values, id)
                        }else {
                            createPerson(values)
                        }
                    }}
                    initialValues= {{ remember: false }}
                    autoComplete="off"
                    form={form}
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
                        rules={[{required: true, message: "Selecione o seu gênero!"}]}
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
                        <Button type="primary" htmlType="submit" style={{alignSelf: "center", marginRight: "1rem"}}>
                            {props.isEditing ? "Editar pessoa" : "Criar pessoa"}
                        </Button>
                        <Button
                            onClick={() => {
                                if(id !== undefined) {
                                    deletePerson(id)
                                }
                            }}
                            type="primary"
                            style=
                                {{
                                    visibility: props.isEditing ? 'visible' : 'hidden',
                                    alignSelf: "center",
                                    backgroundColor: "darkred",
                                    borderColor: "red"
                                }}
                        >
                            Deletar pessoa
                        </Button>
                    </Form.Item>

                </Form>



            </div>
        </div>
    );
}