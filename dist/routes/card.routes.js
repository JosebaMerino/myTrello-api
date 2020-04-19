"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const card_controller_1 = require("../controllers/card.controller");
class CardRoutes {
    constructor() {
        this.cardController = new card_controller_1.CardController();
    }
    routes(app) {
        app.route('/card')
            .get(this.cardController.getAll)
            .post(this.cardController.add);
        app.route('/card/:id?')
            .get(this.cardController.getByIdAndPopulate);
        app.route('/card/:id')
            .get(this.cardController.getById)
            .put(this.cardController.update)
            .delete(this.cardController.delete);
    }
}
exports.CardRoutes = CardRoutes;
//# sourceMappingURL=card.routes.js.map