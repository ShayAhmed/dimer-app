"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetReqSchema = exports.PostReqSchema = void 0;
exports.PostReqSchema = {
    body: {
        type: 'object',
        required: ['data'],
        properties: {
            data: { type: 'string' },
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
};
exports.GetReqSchema = {
    response: {
        200: {
            type: 'object',
            properties: {
                item: { type: 'string' },
                size: { type: 'number' },
            },
        },
        404: {
            type: 'object',
            properties: {
                error: { type: 'string' },
                message: { type: 'string' },
            },
        },
    },
};
