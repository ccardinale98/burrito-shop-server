import mongoose, { Document, Schema } from 'mongoose';

interface IOrder extends Document {
    items: mongoose.Types.ObjectId[];
    totalCost: number;
}

const OrderSchema: Schema = new Schema({
    items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'OrderItem', required: true }],
    totalCost: { type: Number, required: true }
});

export default mongoose.model<IOrder>('Order', OrderSchema);
