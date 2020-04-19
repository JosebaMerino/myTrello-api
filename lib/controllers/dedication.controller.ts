import { GenericController } from './generic.controller';

import { DedicationSchema, IDedication, modelName } from '../models/dedication.model';

export class DedicationController extends GenericController<IDedication> {
  constructor() {
    super('Dedication', DedicationSchema);
    console.log('trzace');
  }
}
