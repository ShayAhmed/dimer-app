import Fastify from "fastify"
import kvRoute from "./routes/kv"
import stackRoute from "./routes/stack"

const app = Fastify({ logger: true })

const start = async () => {
    try {
        await app.register(kvRoute, { prefix: "/api" })
        await app.register(stackRoute, { prefix: "/api" })
        app.log.debug(app.printRoutes());
        await app.listen({ port: 8080 })
    } catch (err) {
        app.log.error(err);
        process.exit(1)
    }
}

start()
