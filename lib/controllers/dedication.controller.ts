import { Request, Response } from 'express';
import * as mongoose from 'mongoose';

import { IBasicController } from './basicController.interface';

import { DedicationSchema, IDedication } from '../models/dedication.model';

const Dedication = mongoose.model<IDedication>('Dedication', DedicationSchema);

export class DedicationController implements IBasicController {
  public getById(req: Request, res: Response) {
    Dedication.findById(req.params.id, (err, dedication) => {
      if (err) {
        res.send(err);
      }
      res.json(dedication);
    });
  }
  public getAll(req: Request, res: Response) {
    Dedication.find({}, (err, dedications) => {
      if (err) {
        res.send(err);
      }
      res.json(dedications);
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
    Dedication.remove({ _id: req.params.id }, (err) => {
      if (err) {
        res.send(err);
      }
      res.json({ msg: 'Deleted succesfully' });
    });
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
