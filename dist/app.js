"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const crmRoutes_1 = require("./routes/crmRoutes");
const dedication_routes_1 = require("./routes/dedication.routes");
const card_routes_1 = require("./routes/card.routes");
const morgan = require('morgan');
class App {
    constructor() {
        this.routePrv = new crmRoutes_1.Routes();
        this.cardRoutes = new card_routes_1.CardRoutes();
        this.dedicationRoutes = new dedication_routes_1.DedicationRoutes();
        this.mongoUrl = 'mongodb://localhost/CRMdb';
        this.app = express();
        this.config();
        this.routePrv.routes(this.app);
        this.dedicationRoutes.routes(this.app);
        this.cardRoutes.routes(this.app);
        this.mongoSetup();
    }
    config() {
        const morganFormat = 'dev';
        // add morgan as middleware
        this.app.use(morgan(morganFormat));
        // support application/json type post data
        this.app.use(bodyParser.json()); // support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    mongoSetup() {
        mongoose.connect(this.mongoUrl);
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map