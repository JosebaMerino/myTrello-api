import { Request, Response } from 'express';
import * as mongoose from 'mongoose';

import { IBasicController } from './basicController.interface';

import { CardSchema, ICard, ICardPopulated } from '../models/card.model';

const Card = mongoose.model<ICard | ICardPopulated>('Card', CardSchema);

export class CardController implements IBasicController {
  getAll(req: Request, res: Response) {
    Card.find({}, (err, cards) => {
      if (err) {
        res.send(err);
      } else {
        res.json(cards);
      }
    });
  }
  getById(req: Request, res: Response) {
    Card.findById(req.params.id, (err, card) => {
      if (err) {
        res.send(err);
      } else {
        res.json(card);
      }
    });
  }
  add(req: Request, res: Response) {
    const newCard = new Card(req.body);
    newCard.save((err, card) => {
      if (err) {
        res.send(err);
      } else {
        res.json(card);
      }
    });
  }
  update(req: Request, res: Response) {
    Card.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true },
      (err, card) => {
        if (err) {
          res.send(err);
        } else {
          res.json(card);
        }
      },
    );
  }
  delete(req: Request, res: Response) {
    Card.remove({ _id: req.params.id }, (err) => {
      if (err) {
        res.send(err);
      } else {
        res.status(200).json({ response: 'Deleted succesfully' });
      }
    });
  }
}
