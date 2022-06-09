### `PUT` /person/{id}

**URL**: `/api/v1/person/{id}` \
**METHOD**: `PUT`
#### Body
Colocar os conteudos que desejam alterar exemplo:
```json
{
    "name": "Jane Doe",
    "gender": "FEMALE"
}
```

#### Resposta de sucesso
**Código**: `200 OK` \
**Exemplo Conteúdo**:
```json
{
    "id": 4,
    "name": "Jane Doe",
    "gender": "FEMALE",
    "email": "abc@gmail.com",
    "phoneNumber": "48-9999999",
    "birthDate": "27-02-2004",
    "enabled": true
}
```