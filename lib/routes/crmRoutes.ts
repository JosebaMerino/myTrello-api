import { Request, Response } from 'express';

import { ContactController } from '../controllers/crmController';

export class Routes {
  public contactController: ContactController = new ContactController();

  public routes(app): void {
    app.route('/')
      .get((req: Request, res: Response) => {
        res.status(200).send({
          message: 'GET request successfull!!',
        });
      });

    // Contact
    app.route('/contact')
      // GET endpoint
      .get(this.contactController.getAll)
      // POST endpoint
      .post(this.contactController.addNewContact);

    // Contact detail
    app.route('/contact/:contactId')
      // Edit especific contact
      .get(this.contactController.getContactWithID)
      .put(this.contactController.updateContact)
      .delete(this.contactController.deleteContact);

  }
}
