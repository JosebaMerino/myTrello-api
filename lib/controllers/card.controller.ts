import { Request, Response } from 'express';
import * as mongoose from 'mongoose';

import { IBasicController } from './basicController.interface';

import { CardSchema, ICard } from '../models/card.model';

const Card = mongoose.model<ICard>('Card', CardSchema);

export class CardController implements IBasicController {
  getAll(req: Request, res: Response) {
    
  }
  getById(req: Request, res: Response) {
    throw new Error("Method not implemented.");
  }
  add(req: Request, res: Response) {
    throw new Error("Method not implemented.");
  }
  update(req: Request, res: Response) {
    throw new Error("Method not implemented.");
  }
  delete(req: Request, res: Response) {
    throw new Error("Method not implemented.");
  }
  
}