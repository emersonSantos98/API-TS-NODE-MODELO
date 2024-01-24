import 'dotenv/config';

import {Server} from './server'

const server = new Server().server;

server.listen(process.env.PORT || 3030, () => {
  if (process.env.NODE_ENV === 'development') {
    console.log(`App rodando em ambiente de desenvolvimento em ${process.env.URL}/api/v1`);
  } else {
    console.log(`App rodando em ambiente de produção em ${process.env.URL}/api/v1`);
  }

});
