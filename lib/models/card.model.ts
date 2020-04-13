import { Metadata } from './metadata.model';
import { Schema, Document } from 'mongoose';
import * as mongoose from 'mongoose';

export interface ICardBase extends Document, Metadata {
  name: string;
  description?: string;
  color?: string;
  position?: number;
}

export interface ICard extends ICardBase {
  dedications: [Schema.Types.ObjectId];
}


export let CardSchema: Schema = new Schema({
  name: { type: String },
  description: { type: String, required: false },
  color: { type: String, required: false },
  position: { type: Number, required: false },
  creationDate: { type: Date, default: Date.now },
  modificationDate: { type: Date, required: false },
  deletionDate: { type: Date, required: false },
});

export default mongoose.model<ICard>('Card', CardSchema);
