import express from 'express';
import bodyParser from 'body-parser';
import api from './routes/api.route.js';
import errorHandler from './middlewares/errorHandling.js';

export default function startApp(
  port = process.env.PORT,
  host = process.env.HOST
) {
  const app = express();
  app.set('port', port);
  app.use(bodyParser.json());
  app.use('/api', api);
  app.use(errorHandler);
  const server = app.listen(port, () => {
    console.log(`server started, port: ${port}, host: ${host}`);
  });
  return server;
}
