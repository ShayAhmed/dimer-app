export interface PostReq {
    Body: {
        data: string
    }
}

export interface GetReq {}

export const PostReqSchema = {
    body: {
        type: "object",
        required: ["data"],
        properties: {
            data: { type: "string" },
        },
    },
    response: {
        200: {
            type: "object",
            properties: {
                message: { type: "string" }
            },
        },
        400: {
            type: "object",
            properties: {
                error: { type: "string" },
                message: { type: "string" },
            },
        },
    },
}

export const GetReqSchema = {
    response: {
        200: {
            type: "object",
            properties: {
                item: { type: "string" },
                size: { type: "number" },
            },
        },
        404: {
            type: "object",
            properties: {
                error: { type: "string" },
                message: { type: "string" },
            },
        },
    },
}
