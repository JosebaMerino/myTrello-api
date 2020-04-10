import { Metadata } from './metadata.model';
import mongoose, { Schema, Document} from 'mongoose';

export interface IDedication extends Document, Metadata {
    startDate: Date;
    endDate?: Date;
}

export const DedicationSchema : Schema = new Schema({
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: false },
});

export default mongoose.model<IDedication>('Dedication', DedicationSchema);