import { Request, Response } from 'express';
import * as mongoose from 'mongoose';
import * as Common from './common';

import { IMetadata } from '../models/metadata.model';

import { IBasicController } from './basicController.interface';

let model;

export abstract class GenericController<T extends mongoose.Document & IMetadata> implements IBasicController {
  constructor(name: string, schema: mongoose.Schema) {
    model = mongoose.model<T>(name, schema);
  }

  public getModel() {
    return model;
  }

  public getAll(req: Request, res: Response) {
    console.log(model);
    // Para buscar solo los que no estan borrados
    const all = req.body.all;
    let searchCondition;

    if (all === true) {
      searchCondition = Common.all;
    } else {
      searchCondition = Common.onlyNotDeleted;
    }
    console.log(searchCondition);
    model.find(searchCondition, (err, dedications) => {
      if (err) {
        res.send(err);
      }
      res.json(dedications);
    });
  }
  public getById(req: Request, res: Response) {
    model.findById(req.params.id, (err, dedication) => {
      if (err) {
        res.send(err);
      }
      res.json(dedication);
    });
  }
  public update(req: Request, res: Response) {

    const body : T = req.body;

    body.modificationDate = new Date();

    model.findOneAndUpdate(
            { _id: req.params.id },
            body,
            { new: true },
            (err, dedication) => {
              if (err) {
                res.send(err);
              }
              res.json(dedication);
            });
  }
  public delete(req: Request, res: Response) {
    // Hace un borrado logico
    // It makes a logic delete
    model.updateOne({ _id: req.params.id }, { deletionDate: new Date() }, (err) => {
      if (err) {
        res.send(err);
      } else {
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
  public add(req: Request, res: Response) {
    const newDedication = new model(req.body);

    newDedication.save((err, dedication) => {
      if (err) {
        res.send(err);
      }
      res.json(dedication);
    });
  }
}
