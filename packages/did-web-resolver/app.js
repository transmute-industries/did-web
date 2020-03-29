const Fastify = require('fastify')
const fastifySwagger = require("fastify-swagger");
function buildFastify (opts) {
  const fastify = Fastify({
    ...opts,
    ignoreTrailingSlash: false
  });
  fastify.register(require("./services"), {
    // options
  });
  const basePath = opts.config.env_name === 'firebase_local' ? '/did-web/us-central1/main/' : undefined;
  fastify.register(fastifySwagger, {
    swagger: {
      info: {
        title: "DID Web",
        description: "DID Web Swagger Definition",
        version: "0.1.0"
      },
      basePath,
    },
    exposeRoute: true,
    routePrefix: "api/docs"
  });
  fastify.register(require("fastify-cors"));
  fastify.register(require("./routes"), { prefix: '/' });
  return fastify
}
module.exports = buildFastify;