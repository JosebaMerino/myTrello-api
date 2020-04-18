import { IMetadata } from './metadata.model';
import { Schema, Document } from 'mongoose';
import * as mongoose from 'mongoose';

import { IDedication } from './dedication.model';

export interface ICardBase extends Document, IMetadata {
  name: string;
  description?: string;
  color?: string;
  position?: number;
}

export interface ICard extends ICardBase {
  dedications: (IDedication['_id'])[];
}

export interface ICardPopulated extends ICardBase {
  dedications: IDedication[];
}

export let CardSchema: Schema = new Schema({
  name: { type: String },
  description: { type: String, required: false },
  color: { type: String, required: false },
  position: { type: Number, required: false },
  creationDate: { type: Date, default: Date.now },
  modificationDate: { type: Date, required: false },
  deletionDate: { type: Date, required: false },
  dedications: [{ type: Schema.Types.ObjectId, ref: 'Dedication' }],
});

/**
 * Un | en los tipos significa que puede ser de un tipo o del otro.
 */
export default mongoose.model<ICard | ICardPopulated>('Card', CardSchema);
