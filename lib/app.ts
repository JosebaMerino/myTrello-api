import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';

import { Routes } from './routes/crmRoutes';
import { DedicationRoutes } from './routes/dedication.routes';
import { CardRoutes } from './routes/card.routes';

const morgan = require('morgan');
class App {

  public app: express.Application;
  public routePrv: Routes = new Routes();
  public cardRoutes: CardRoutes = new CardRoutes();
  public dedicationRoutes: DedicationRoutes = new DedicationRoutes();

  public mongoUrl: string = 'mongodb://localhost/CRMdb';

  constructor() {
    this.app = express();
    this.config();
    this.routePrv.routes(this.app);
    this.dedicationRoutes.routes(this.app);
    this.cardRoutes.routes(this.app);
    this.mongoSetup();
  }

  private config(): void {
    const morganFormat: string = 'dev';
    // add morgan as middleware
    this.app.use(morgan(morganFormat));
    // support application/json type post data
    this.app.use(bodyParser.json());        // support application/x-www-form-urlencoded post data
    this.app.use(bodyParser.urlencoded({ extended: false }));

  }

  private mongoSetup() {
    mongoose.connect(this.mongoUrl);
  }

}

export default new App().app;
