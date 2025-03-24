# Fastify Dimer App

## Overview

There are 2 parts to this app

1. **LIFO Stack**
2. **Key Value Store**

To run the app, run the following commands:

```bash
tar -xf fastify-dimer-app.tar
npm install
npm test
npm start
```

## Api Docs

### LIFO Stack

#### Push to Stack

**Route**: POST ```/api/stack/push```

Request Body
```json
{
    "data": "data-goes-here"
}
```
   
Response
```json
{
    "message": "Item added successfully"
}
```

#### Pop from Stack

**Route**: GET ```/api/stack/pop```

Request Body - N/A
   
Response
* Note that the **size** parameter indicates the remaining elements in the stack **after** popping
```json
{
    "item": "data-in-stack",
    "size": 0 //remaining size of stack
}
```

### Key Value Store

#### Add Value

**Route**: POST ```/api/kv/set```

Request Body

* Note that the **ttl** parameter is in **seconds**, and is and **optional**  parameter
```json
{
    "key": "123",
    "value": "555",
    "ttl": "3"
}
```

Response
```json
{
    "message": "Item was added"
}
```

#### Get Value

**Route**: GET ```/api/kv/get/:key```

* Note that the **key** query paramter is the key of the element stored in the KV store.

Request Body - N/A

Response
```json
{
    "value": "555",
}
```

Response (key does not exist)
```json
{
    "value": "",
}
```

#### Delete Value

**Route**: GET ```/api/kv/delete/:key```

* Note that the **key** query paramter is the key of the element stored in the KV store.

Request Body - N/A

Response
```json
{
    "message": "Item was deleted"
}
```

Response (key does not exist)
```json
{
    "message": "Key does not exist"
}
```