import { Request, Response } from 'express';
import * as mongoose from 'mongoose';

import { GenericController } from './generic.controller';

import { CardSchema, ICard, ICardPopulated } from '../models/card.model';

export class CardController extends GenericController<ICard | ICardPopulated> {
  constructor() {
    super('Card', CardSchema);
  }
}
