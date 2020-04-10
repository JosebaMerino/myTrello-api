import * as mongoose from 'mongoose';
import { Request, Response } from 'express';

import { IBasicController } from './basicController.interface'


import { DedicationSchema, IDedication } from '../models/dedication.model';


const Dedication = mongoose.model<IDedication>('Dedication', DedicationSchema);

export class DedicationController implements IBasicController {
    public getById(req: Request, res: Response) {
        Dedication.findById(req.params.id, (err, dedication) => {
            if(err) {
                res.send(err);
            }
            res.json(dedication);
        })
    }
    public getAll(req: Request, res: Response) {
        Dedication.find({}, (err, dedications) => {
            if(err) {
                res.send(err);
            }
            res.json(dedications);
        });
    }
    public update(req: Request, res: Response) {
        let data: IDedication = req.body;
        data.modificationDate = Date.now();

        Dedication.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, dedication) => {
            if(err) {
                res.send(err);
            }
            res.json(dedication);
        });
    }
    public delete(req: Request, res: Response) {
        Dedication.remove
    }
    public add(req: Request, res: Response) {
        throw new Error("Method not implemented.");
    }

}