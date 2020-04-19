"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Common = require("./common");
class GenericController {
    constructor(name, schema) {
        this.model = mongoose.model(name, schema);
    }
    getModel() {
        return this.model;
    }
    getAll(req, res) {
        // console.log(this.model);
        // Para buscar solo los que no estan borrados
        const all = req.body.all;
        let searchCondition;
        if (all === true) {
            searchCondition = Common.all;
        }
        else {
            searchCondition = Common.onlyNotDeleted;
        }
        console.log(searchCondition);
        this.model.find(searchCondition, (err, dedications) => {
            if (err) {
                res.send(err);
            }
            res.json(dedications);
        });
    }
    getById(req, res) {
        this.model.findById(req.params.id, (err, dedication) => {
            if (err) {
                res.send(err);
            }
            res.json(dedication);
        });
    }
    update(req, res) {
        const body = req.body;
        body.modificationDate = new Date();
        this.model.findOneAndUpdate({ _id: req.params.id }, body, { new: true }, (err, dedication) => {
            if (err) {
                res.send(err);
            }
            res.json(dedication);
        });
    }
    delete(req, res) {
        // Hace un borrado logico
        // It makes a logic delete
        this.model.updateOne({ _id: req.params.id }, { deletionDate: new Date() }, (err) => {
            if (err) {
                res.send(err);
            }
            else {
                res.send({ msg: 'Deleted succesfully!' });
            }
        });
        /*
        Dedication.remove({ _id: req.params.id }, (err) => {
          if (err) {
            res.send(err);
          }
          res.json({ msg: 'Deleted succesfully' });
        });
        */
    }
    add(req, res) {
        const newDedication = new mongoose.Model(req.body);
        newDedication.save((err, dedication) => {
            if (err) {
                res.send(err);
            }
            res.json(dedication);
        });
    }
}
exports.GenericController = GenericController;
//# sourceMappingURL=generic.controller.js.map