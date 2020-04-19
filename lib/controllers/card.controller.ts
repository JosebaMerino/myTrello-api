import { GenericController } from './generic.controller';

import { CardSchema, ICard, ICardPopulated, modelName } from '../models/card.model';

export class CardController extends GenericController<ICard | ICardPopulated> {
  constructor() {
    super(modelName, CardSchema);
  }
}
