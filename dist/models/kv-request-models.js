"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteReqSchema = exports.GetReqSchema = exports.SetReqSchema = void 0;
exports.SetReqSchema = {
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
};
exports.GetReqSchema = {
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
};
exports.DeleteReqSchema = {
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
};
