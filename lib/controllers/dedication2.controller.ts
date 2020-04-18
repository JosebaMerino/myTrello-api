import { Request, Response } from 'express';
import * as mongoose from 'mongoose';

import { GenericController } from './generic.controller';

import { DedicationSchema, IDedication } from '../models/dedication.model';

let Dedication;

export class DedicationController2 extends GenericController<IDedication> {
  constructor() {
    super('Dedication', DedicationSchema);
  }
}
