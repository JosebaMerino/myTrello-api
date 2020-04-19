import { Request, Response } from 'express';
import * as mongoose from 'mongoose';
import * as Common from './common';

import { IMetadata } from '../models/metadata.model';

import { IBasicController } from './basicController.interface';

export class GenericController<T extends mongoose.Document & IMetadata> implements IBasicController {
  public model;
  constructor(name: string, schema: mongoose.Schema) {
    this.model = mongoose.model<T>(name, schema);
  }

  public getModel() {
    return this.model;
  }

  public test = (req: Request, res: Response) => {
    console.log(this)
    console.log(this.model);
    res.json(this.model);
  }

  public getAll = (req: Request, res: Response) => {
   // console.log(this.model);
    // Para buscar solo los que no estan borrados
    const all = req.body.all;
    let searchCondition;

    if (all === true) {
      searchCondition = Common.all;
    } else {
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
  public getById = (req: Request, res: Response) => {
    this.model.findById(req.params.id, (err, dedication) => {
      if (err) {
        res.send(err);
      }
      res.json(dedication);
    });
  }
  public update = (req: Request, res: Response) => {

    const body : T = req.body;

    body.modificationDate = new Date();

    this.model.findOneAndUpdate(
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
  public delete = (req: Request, res: Response) => {
    // Hace un borrado logico
    // It makes a logic delete
    this.model.updateOne({ _id: req.params.id }, { deletionDate: new Date() }, (err) => {
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
  public add = (req: Request, res: Response) => {
    const newDedication = new this.model(req.body);

    newDedication.save((err, dedication) => {
      if (err) {
        res.send(err);
      }
      res.json(dedication);
    });
  }
}
