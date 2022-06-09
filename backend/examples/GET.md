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
    "pageSize": 25, // Default 25
    "page": 1, // Default 1
    "enabled": true, // true: Retorna só quem está abilitado, false: Retorna todo mundo
    "email": "gmail", 
    "name": "John",
    "gender": "MALE"
}
```
OBS: Usar argumentos na URL de Query

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

## `GET` /person/stats/gender-ratio

**URL**: `/api/v1/person/` \
**METHOD**: `GET`

Retorna dados para o [@nivo](https://nivo.rocks/pie/)

### Resposta de sucesso
**Código**: `200 OK` \
**Exemplo Conteúdo**:
```json
[
  {
    "id": "male",
    "label": "Masculino",
    "value": 149,
    "color": "rgb(0, 170, 243)"
  },
  {
    "id": "female",
    "label": "Feminino",
    "value": 470,
    "color": "rgb(255, 110, 243)"
  },
  {
    "id": "other",
    "label": "Outro",
    "value": 509,
    "color": "rgb(137, 136, 134)"
  }
]
```