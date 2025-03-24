export interface Item<T> {
    value: T
    ttl?: number
}

export interface SetReq {
    Body: {
        key: string
        value: string
        ttl?: number
    }
}

export interface GetReq {
    Params: {
        key: string
    }
}

export interface DeleteReq {
    Params: {
        key: string
    }
}

export const SetReqSchema = {
    body: {
        type: 'object',
        required: ['key', 'value'],
        properties: {
            message: { type: 'string' },
            value: { type: 'string' },
            ttl: { type: 'number', minimum: 0 },
        },
    },
    response: {
        200: {
            type: 'object',
            properties: {
                message: { type: 'string' },
            },
        },
        400: {
            type: 'object',
            properties: {
                error: { type: 'string' },
                message: { type: 'string' },
            },
        },
    },
}

export const GetReqSchema = {
    params: {
        type: 'object',
        required: ['key'],
        properties: {
            key: { type: 'string' },
        },
    },
    response: {
        200: {
            type: 'object',
            properties: {
                value: { type: ['string', 'null'] },
            },
        },
        400: {
            type: 'object',
            properties: {
                error: { type: 'string' },
                message: { type: 'string' },
            },
        },
    },
}

export const DeleteReqSchema = {
    params: {
        type: 'object',
        required: ['key'],
        properties: {
            key: { type: 'string' },
        },
    },
    response: {
        200: {
            type: 'object',
            properties: {
                message: { type: 'string' },
            },
        },
        400: {
            type: 'object',
            properties: {
                error: { type: 'string' },
                message: { type: 'string' },
            },
        },
    },
}
