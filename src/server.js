import Hapi from '@hapi/hapi';
import routes from './routes.js';

console.log('Hallo kita akan membuat RESTful API');

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes);

  await server.start();
  console.log(`server udah jalan bro di ${server.info.uri}`);
};

init();
