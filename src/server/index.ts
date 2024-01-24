import 'dotenv/config';

import {Server} from './server'

const server = new Server().server;

server.listen(process.env.PORT || 3030, () => {
  console.log(`App listening on port ${process.env.PORT}!`);
});
