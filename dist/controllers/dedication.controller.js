"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generic_controller_1 = require("./generic.controller");
const dedication_model_1 = require("../models/dedication.model");
class DedicationController extends generic_controller_1.GenericController {
    constructor() {
        super('Dedication', dedication_model_1.DedicationSchema);
        console.log('trzace');
    }
}
exports.DedicationController = DedicationController;
//# sourceMappingURL=dedication.controller.js.map