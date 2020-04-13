import { Metadata } from './metadata.model';
import { Schema, Document } from 'mongoose';
import * as mongoose from 'mongoose';

export interface IDedication extends Document, Metadata {
  startDate: Date;
  endDate?: Date;
}

export let DedicationSchema : Schema = new Schema({
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: false },
  creationDate: { type: Date, default: Date.now },
  modificationDate: { type: Date, required: false },
  deletionDate: { type: Date, required: false },
});

DedicationSchema.pre('findOneAndUpdate', (next) => {
  console.log('Pre UPDATE function');
  console.log(this);
  this.modificationDate = Date.now;
  next();
});

export default mongoose.model<IDedication>('Dedication', DedicationSchema);