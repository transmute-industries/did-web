
module.exports = (fastify, opts, done) => {
  const { resolver } = fastify.svcs;
  fastify.get(
    "/:did",
    {
      schema: {
        description: "DIDs GET",
        tags: ["Resolver"],
        summary: "DID Document",
        params: {
          type: 'object',
          properties: {
            did: {
              type: 'string',
              description: 'A did:web did',
              default: 'did:web:vc.transmute.world'
            }
          }
        },
      }
    },
    async (req, reply) => {
      const endpoint = await resolver.resolve(req.params.did);
      reply.code(302).redirect(endpoint)
    }
  );
  done();
};
