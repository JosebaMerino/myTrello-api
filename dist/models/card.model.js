"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongoose = require("mongoose");
exports.modelName = 'Card';
exports.CardSchema = new mongoose_1.Schema({
    name: { type: String },
    description: { type: String, required: false },
    color: { type: String, required: false },
    position: { type: Number, required: false },
    creationDate: { type: Date, default: Date.now },
    modificationDate: { type: Date, required: false },
    deletionDate: { type: Date, required: false },
    dedications: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'Dedication' }],
});
/**
 * Un | en los tipos significa que puede ser de un tipo o del otro.
 */
exports.default = mongoose.model(exports.modelName, exports.CardSchema);
//# sourceMappingURL=card.model.js.map