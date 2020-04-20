import { Request, Response, NextFunction } from 'express';

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

  /* Router Handlers
  */

  /**
   * This router handler, handles getById and depending if the query parameter
   * "populate" is true or false, calls one handler or another.
   */
  getByIDHandler = (req: Request, res: Response) => {
    const populate: Boolean = Boolean(JSON.parse(req.query.populate));
    if (populate) {
      console.log('Populated');
      this.getByIdAndPopulate(req, res);
    } else {
      this.getById(req, res);
    }
  }
}
