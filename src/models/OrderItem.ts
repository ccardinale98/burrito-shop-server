import mongoose, { Document, Schema } from 'mongoose';

interface IOrderItem extends Document {
    burrito: mongoose.Types.ObjectId;
    quantity: number;
}

const OrderItemSchema: Schema = new Schema({
    burrito: { type: mongoose.Schema.Types.ObjectId, ref: 'Burrito', required: true },
    quantity: { type: Number, required: true }
});

export default mongoose.model<IOrderItem>('OrderItem', OrderItemSchema);
