import { Request, Response } from 'express';
import * as mongoose from 'mongoose';

import { IBasicController } from './basicController.interface';

import { DedicationSchema, IDedication } from '../models/dedication.model';

import * as Common from './common';

const Dedication = mongoose.model<IDedication>('Dedication', DedicationSchema);

export class DedicationController implements IBasicController {
  public getAll(req: Request, res: Response) {
    // Para buscar solo los que no estan borrados
    const all = req.body.all;
    let searchCondition;

    if (all === true) {
      searchCondition = Common.all;
    } else {
      searchCondition = Common.onlyNotDeleted;
    }
    console.log(searchCondition);
    Dedication.find(searchCondition, (err, dedications) => {
      if (err) {
        res.send(err);
      }
      res.json(dedications);
    });
  }
  public getById(req: Request, res: Response) {
    Dedication.findById(req.params.id, (err, dedication) => {
      if (err) {
        res.send(err);
      }
      res.json(dedication);
    });
  }
  public update(req: Request, res: Response) {
    const data: IDedication = req.body;

    data.modificationDate = new Date();

    Dedication.findOneAndUpdate(
            { _id: req.params.id },
            data,
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
    Dedication.updateOne({ _id: req.params.id}, { deletionDate: new Date() }, (err) => {
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
    const newDedication = new Dedication(req.body);

    newDedication.save((err, dedication) => {
      if (err) {
        res.send(err);
      }
      res.json(dedication);
    });
  }

}
