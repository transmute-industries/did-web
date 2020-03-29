
const supertest = require('supertest')
const buildFastify = require('./app')

const opts = {
    config: {
        env_name: 'supertest_local'
    }
}

const fastify = buildFastify(opts)

beforeAll(async ()=>{
    await fastify.ready()
})

it('/.well-known/did.json', async () =>{
    const response = await supertest(fastify.server)
        .get('/.well-known/did.json')
        .expect(200)
        .expect('Content-Type', 'application/json; charset=utf-8')
    expect(response.body.id).toBe('did:web:did-web.web.app')
})

it('/identifiers/did:web:vc.transmute.world', async () =>{
    const response = await supertest(fastify.server)
        .get('/identifiers/did:web:vc.transmute.world')
        .expect(200)
        .expect('Content-Type', 'application/json; charset=utf-8')
    expect(response.body.id).toBe('did:web:vc.transmute.world')
})

it('/identifiers/did:web:did.actor:alice', async () =>{
    const response = await supertest(fastify.server)
        .get('/identifiers/did:web:did.actor:alice')
        .expect(200)
        .expect('Content-Type', 'application/json; charset=utf-8')
    expect(response.body.id).toBe('did:web:did.actor:alice')
})

afterAll(async ()=>{
    fastify.close()
})