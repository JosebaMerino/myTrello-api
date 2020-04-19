import { CardController } from '../controllers/card.controller';
import * as express from 'express';

export class CardRoutes {
  public cardController: CardController = new CardController();

  public routes(app: express.Application): void {
    app.route('/card')
    .get(this.cardController.getAll)
    .post(this.cardController.add);

    
    app.route('/card/:id')
    .get(this.cardController.getById)
    .put(this.cardController.update)
    .delete(this.cardController.delete);
    
    app.route('/card/:id?')
    .get(this.cardController.getByIdAndPopulate);
  }
}
