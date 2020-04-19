"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crmController_1 = require("../controllers/crmController");
class Routes {
    constructor() {
        this.contactController = new crmController_1.ContactController();
    }
    routes(app) {
        app.route('/')
            .get((req, res) => {
            res.status(200).send({
                message: 'GET request successfull!!',
            });
        });
        // Contact
        app.route('/contact')
            // GET endpoint
            .get(this.contactController.getAll)
            // POST endpoint
            .post(this.contactController.addNewContact);
        // Contact detail
        app.route('/contact/:contactId')
            // Edit especific contact
            .get(this.contactController.getContactWithID)
            .put(this.contactController.updateContact)
            .delete(this.contactController.deleteContact);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=crmRoutes.js.map