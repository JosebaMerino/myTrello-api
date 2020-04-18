import { Request, Response } from 'express';

import { DedicationController } from '../controllers/dedication.controller';

import { DedicationController2 } from '../controllers/dedication2.controller';

export class DedicationRoutes {
  public dedicationController: DedicationController2 = new DedicationController2();

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
