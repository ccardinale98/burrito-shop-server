import mongoose from 'mongoose';

export interface IOrderItemRequest {
    burrito: mongoose.Types.ObjectId;
    quantity: number;
}