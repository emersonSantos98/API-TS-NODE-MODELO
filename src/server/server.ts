// @ts-ignore
import express from "express";

import {router} from "../routes";


export class Server {
  public server: express.Application;

  constructor() {
    this.server = express();
    this.middleware();
    this.router();
  }

  private middleware() {
    this.server.use(express.json());
  }

  private router() {

    this.server.use('/api/v1', router);

  }

}
