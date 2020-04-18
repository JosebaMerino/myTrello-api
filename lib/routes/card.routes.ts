import { CardController } from '../controllers/card2.controller';

export class CardRoutes {
  public cardController: CardController = new CardController();

  public routes(app): void {
    app.route('/card')
    .get(this.cardController.getAll)
    .post(this.cardController.add);

    app.route('/card/:id')
    .get(this.cardController.getById)
    .put(this.cardController.update)
    .delete(this.cardController.delete);
  }
}
