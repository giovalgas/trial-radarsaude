## `GET` /person/{id}

**URL**: `/api/v1/person/{id}` \
**METHOD**: `GET`

### Resposta de sucesso
**Código**: `200 OK` \
**Exemplo Conteúdo**:
```json
{
    "id": 4,
    "name": "John Doe",
    "gender": "MALE",
    "email": "abc@gmail.com",
    "phoneNumber": "48-9999999",
    "birthDate": "27-02-2004",
    "enabled": true
}
```

## `GET` /person

**URL**: `/api/v1/person/` \
**METHOD**: `GET`

### Filtros
Exemplo de filtros: \
É possivel usar filtros como: 

```json
{
    "pageData": {
      "pageSize": 25, // Default 25
      "page": 1 // Default 1
    },
    "enabled": true, // true: Retorna só quem está abilitado, false: Retorna todo mundo
    "email": "gmail", 
    "name": "John",
    "gender": "MALE"
}
```

### Resposta de sucesso
**Código**: `200 OK` \
**Exemplo Conteúdo**:
```json
[
  {
    "id": 1,
    "name": "John Doe",
    "gender": "MALE",
    "email": "abc@gmail.com",
    "phoneNumber": "48-9999999",
    "birthDate": "27-02-2004",
    "enabled": true
  },
  {
    "id": 4,
    "name": "John Doe",
    "gender": "MALE",
    "email": "abc@gmail.com",
    "phoneNumber": "48-9999999",
    "birthDate": "27-02-2004",
    "enabled": true
  }
]
```