module.exports = function(fastify, opts, done) {
  fastify.register(require("./well-known"), { prefix: "/.well-known" });
  fastify.register(require("./identifiers"), { prefix: "/api/v1/identifiers" });
  done();
};
