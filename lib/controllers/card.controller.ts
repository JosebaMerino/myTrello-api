import { Request, Response } from 'express';

import { GenericController } from './generic.controller';

import { CardSchema, ICard, ICardPopulated, modelName } from '../models/card.model';
import * as mongoose from 'mongoose';

let cardModel: mongoose.Model<ICardPopulated>;

export class CardController extends GenericController<ICard | ICardPopulated> {
  constructor() {
    super(modelName, CardSchema);
    cardModel = super.getModel();
  }

  getByIdAndPopulate(req: Request, res: Response) {
    const populate = req.query.populate;
    console.log('hi');
    if (populate) {
      cardModel
        .findById(req.params.id)
        .populate('dedications')
        .exec((err, card) => {
          if (err) {
            res.send(err);
          } else {
            res.status(200).json(card);
          }
        });
    }
  }
}
