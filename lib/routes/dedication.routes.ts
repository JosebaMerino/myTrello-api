import { DedicationController } from '../controllers/dedication.controller';

export class DedicationRoutes {
  public dedicationController: DedicationController = new DedicationController();

  public routes(app): void {
    app.route('/dedication')
    .get(this.dedicationController.getAll)
    .post(this.dedicationController.add);

    app.route('/dedication/:id')
    .get(this.dedicationController.getById)
    .put(this.dedicationController.update)
    .delete(this.dedicationController.delete);
  }
}
