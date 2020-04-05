import { Request, Response } from "express";

export class Routes {
    public routes(app): void {
        app.route('/')
        .get((req: Request, res: Response) => {
            res.status(200).send({
                message: 'GET request successfull!!'
            });
        });

        //Contact
        app.route('/contact')
        // GET endpoint
        .get((req: Request, res: Response) => {
            //Get all contacts
            res.status(200).send({
                message: 'GET request successfull!!'
            });
        })
        // POST endpoint
        .post((req: Request, res: Response) => {
            // Create new contact
            res.status(200).send({
                message: 'POST request successfull!!'
            });
        })
        // Contact detail 
        app.route('/contact/:contactId')
        // GET especific contact
        .get((req: Request, res: Response) => {
            // Get a single contact detail
            res.status(200).send({
                message: 'GET request successfull!!'
            });
        })
        .put((req: Request, res: Response) => {
            // Update new contact
            res.status(200).send({
                message: 'PUT request successfull!!'
            });
        })
        .delete((req: Request, res: Response) => {
            // Delete a contact
            res.status(200).send({
                message: 'DELETE request successfull!!'
            });
        });

    }
}