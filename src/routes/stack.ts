import { FastifyInstance } from 'fastify'
import { PostReq, PostReqSchema, GetReqSchema } from '../models/stack-request-models'
import { StackService } from '../service/stack-service'

const stackService = new StackService<string>()

export default async function stackRoute(fastify: FastifyInstance) {
    fastify.post<PostReq>('/stack/push', { schema: PostReqSchema }, async (req, reply) => {
        try {
            const { data } = req.body
            if (data != '') {
                stackService.push(data)

                return reply.status(200).send({
                    message: 'Item added successfully',
                })
            }
            return reply.status(400).send({
                message: 'Item could not be added',
                error: 'Item empty',
            })
        } catch (error) {
            fastify.log.error(error)
            return reply.status(500).send({
                message: 'Item could not be added',
                error: 'Internal server error',
            })
        }
    })

    fastify.get('/stack/pop', { schema: GetReqSchema }, async (req, reply) => {
        try {
            const item = stackService.pop()
            const size = stackService.size()

            return reply.status(200).send({
                item: item == undefined ? '' : item,
                size: size,
            })
        } catch (error) {
            fastify.log.error(error)

            return reply.status(500).send({
                message: 'Item could not be retrieved',
                error: 'Internal server error',
            })
        }
    })
}
