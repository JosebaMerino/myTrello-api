"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dedication_controller_1 = require("../controllers/dedication.controller");
class DedicationRoutes {
    constructor() {
        this.dedicationController = new dedication_controller_1.DedicationController();
    }
    routes(app) {
        app.route('/dedication')
            .get(this.dedicationController.getAll)
            .post(this.dedicationController.add);
        app.route('/dedication/:id')
            .get(this.dedicationController.getById)
            .put(this.dedicationController.update)
            .delete(this.dedicationController.delete);
    }
}
exports.DedicationRoutes = DedicationRoutes;
//# sourceMappingURL=dedication.routes.js.map