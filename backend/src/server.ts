
import Fastify, { FastifyInstance } from 'fastify';
import { TypeBoxTypeProvider } from '@fastify/type-provider-typebox';


// Define the Fastify server with TypeBox type provider
const fastify: FastifyInstance = Fastify({
  logger: true,                         // pretty logs
}).withTypeProvider<TypeBoxTypeProvider>(); // enables TypeBox typings

// ----------------------------------------------------
// 2️⃣ Simple GET route (typed)
// ----------------------------------------------------
fastify.get('/', async (request, reply) => {
  // Returning a plain object automatically becomes JSON
  return { hello: 'world' };
});


// ----------------------------------------------------
// 4️⃣ Start the server
// ----------------------------------------------------
const start = async () => {
  try {
    await fastify.listen({ port: 3000, host: '0.0.0.0' });
    var addressInfo = fastify.server.address();
    let address, port;
    if (addressInfo && typeof addressInfo !== 'string') {
      ({ address, port } = addressInfo);
    } else {
      ({ address, port } = { address: 'localhost', port: 3000 });
    }

    fastify.log.info(
      `🚀 Server ready at http://${address}:${port}`
    );
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();