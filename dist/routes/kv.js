"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = kvRoute;
const kv_request_models_1 = require("../models/kv-request-models");
const kv_service_1 = require("../service/kv-service");
const kvService = new kv_service_1.KVService();
async function kvRoute(fastify) {
    fastify.post("/kv/set", { schema: kv_request_models_1.SetReqSchema }, async (req, reply) => {
        try {
            const { key, value, ttl } = req.body;
            kvService.set(key, value, ttl);
            return reply.status(200).send({
                message: "Item was added",
            });
        }
        catch (error) {
            fastify.log.error(error);
            return reply.status(500).send({
                message: "Item could not be set",
                error: "Internal server error",
            });
        }
    });
    fastify.get("/kv/get/:key", { schema: kv_request_models_1.GetReqSchema }, async (req, reply) => {
        try {
            const { key } = req.params;
            if (key == null || key.trim() == "") {
                return reply.status(400).send({
                    message: "Key was empty or null",
                    error: "Invalid Key",
                });
            }
            const data = kvService.get(key);
            return reply.status(200).send({
                value: data == undefined ? "" : data,
            });
        }
        catch (error) {
            fastify.log.error(error);
            return reply.status(500).send({
                message: "Item could not be retrieved",
                error: "Internal server error",
            });
        }
    });
    fastify.delete("/kv/delete/:key", {
        schema: kv_request_models_1.DeleteReqSchema,
    }, async (request, reply) => {
        try {
            const { key } = request.params;
            if (!key || key.trim() == "") {
                return reply.status(400).send({
                    message: "Key was empty or null",
                    error: "Invalid Key",
                });
            }
            const deleted = kvService.delete(key);
            return reply.status(200).send({
                message: deleted ? "Item was deleted" : "Key does not exist",
            });
        }
        catch (error) {
            fastify.log.error(error);
            return reply.status(500).send({
                error: "Internal Server Error",
                message: "An unexpected error occurred",
            });
        }
    });
}
