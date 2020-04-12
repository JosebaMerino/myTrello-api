import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';

import { Routes } from './routes/crmRoutes';
import { DedicationRoutes } from './routes/dedication.routes';

class App {

  public app: express.Application;
  public routePrv: Routes = new Routes();
  public dedicationRoutes: DedicationRoutes = new DedicationRoutes();

  public mongoUrl: string = 'mongodb://localhost/CRMdb';

  constructor() {
    this.app = express();
    this.config();
    this.routePrv.routes(this.app);
    this.dedicationRoutes.routes(this.app);
    this.mongoSetup();
  }

  private config(): void {
    // support application/json type post data
    this.app.use(bodyParser.json());        // support application/x-www-form-urlencoded post data
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  private mongoSetup() {
    mongoose.connect(this.mongoUrl);
  }

}

export default new App().app;
