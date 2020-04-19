"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generic_controller_1 = require("./generic.controller");
const card_model_1 = require("../models/card.model");
let cardModel;
class CardController extends generic_controller_1.GenericController {
    constructor() {
        super(card_model_1.modelName, card_model_1.CardSchema);
        cardModel = super.getModel();
    }
    getByIdAndPopulate(req, res) {
        const populate = req.query.populate;
        console.log('hi');
        if (populate) {
            cardModel
                .findById(req.params.id)
                .populate('dedications')
                .exec((err, card) => {
                if (err) {
                    res.send(err);
                }
                else {
                    res.status(200).json(card);
                }
            });
        }
    }
}
exports.CardController = CardController;
//# sourceMappingURL=card.controller.js.map