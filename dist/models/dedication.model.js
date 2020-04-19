"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongoose = require("mongoose");
exports.modelName = 'Dedication';
exports.DedicationSchema = new mongoose_1.Schema({
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: false },
    creationDate: { type: Date, default: Date.now },
    modificationDate: { type: Date, required: false },
    deletionDate: { type: Date, required: false },
});
exports.DedicationSchema.pre('findOneAndUpdate', (next) => {
    console.log('Pre UPDATE function');
    console.log(this);
    this.modificationDate = Date.now;
    next();
});
exports.default = mongoose.model(exports.modelName, exports.DedicationSchema);
//# sourceMappingURL=dedication.model.js.map