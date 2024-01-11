import mongoose from 'mongoose';
import { IBurrito } from '../models/Burrito';

export interface IPopulatedOrderItem extends Document {
    _id: mongoose.Types.ObjectId;
    burrito: IBurrito;
    quantity: number;
}