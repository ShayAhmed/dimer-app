"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = stackRoute;
const stack_request_models_1 = require("../models/stack-request-models");
const stack_service_1 = require("../service/stack-service");
const stackService = new stack_service_1.StackService();
async function stackRoute(fastify) {
    fastify.post("/stack/push", { schema: stack_request_models_1.PostReqSchema }, async (req, reply) => {
        try {
            const { data } = req.body;
            if (data != "") {
                stackService.push(data);
                return reply.status(200).send({
                    message: "Item added successfully",
                });
            }
            return reply.status(400).send({
                message: "Item could not be added",
                error: "Item empty",
            });
        }
        catch (error) {
            fastify.log.error(error);
            return reply.status(500).send({
                message: "Item could not be added",
                error: "Internal server error",
            });
        }
    });
    fastify.get("/stack/pop", { schema: stack_request_models_1.GetReqSchema }, async (req, reply) => {
        try {
            const item = stackService.pop();
            const size = stackService.size();
            return reply.status(200).send({
                item: item == undefined ? "" : item,
                size: size
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
}
