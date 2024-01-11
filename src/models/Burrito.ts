import mongoose, { Document, Schema } from 'mongoose';

export interface IBurrito extends Document {
    name: string;
    size: string;
    price: number;
}

const BurritoSchema: Schema = new Schema({
    name: { type: String, required: true },
    size: { type: String, required: true },
    price: { type: Number, required: true }
});

export default mongoose.model<IBurrito>('Burrito', BurritoSchema);
