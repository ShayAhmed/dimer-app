"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const kv_1 = __importDefault(require("./routes/kv"));
const stack_1 = __importDefault(require("./routes/stack"));
const app = (0, fastify_1.default)({ logger: true });
const start = async () => {
    try {
        await app.register(kv_1.default, { prefix: '/api' });
        await app.register(stack_1.default, { prefix: '/api' });
        console.log(app.printRoutes());
        await app.listen({ port: 8080 });
    }
    catch (err) {
        app.log.error(err);
        process.exit(1);
    }
};
start();
