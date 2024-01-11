import Order from '../models/Order';
import OrderItem from '../models/OrderItem';
import { IOrderItemRequest } from '../utils/iOrderItemRequest';
import { IPopulatedOrderItem } from '../utils/iPopulateOrderItem';

export const getOrders = async (req: any, res: any) => {
    try {
        const orders = await Order.find().populate('items');
        res.json(orders);
    } catch (err: any) {
        res.status(500).json({ message: err.message });
    }
};

export const addOrder = async (req: any, res: any) => {
    try {
        console.log(req.body.items)
        const orderItems: IPopulatedOrderItem[] = await Promise.all(
            (req.body.items as IOrderItemRequest[]).map(async (item: IOrderItemRequest) => {
                let newOrderItem = new OrderItem({
                    burrito: item.burrito,
                    quantity: item.quantity
                });

                newOrderItem = await newOrderItem.save();
                await newOrderItem.populate('burrito');

                return newOrderItem as unknown as IPopulatedOrderItem;
            })
        );

        const totalCost = orderItems.reduce((total, item) => {
            if (!item.burrito || typeof item.burrito === 'string') {
                throw new Error('Burrito is not populated');
            }
            return total + item.quantity * item.burrito.price;
        }, 0);

        let order = new Order({
            items: orderItems.map(item => item._id),
            totalCost: totalCost
        });

        const newOrder = await order.save();
        res.status(201).json(newOrder);
    } catch (err: any) {
        console.log(err.message);
        res.status(400).json({ message: err.message });
    }
};

export const getOrderById = async (req: any, res: any) => {
    try {
        const order = await Order.findById(req.params.id).populate('items');
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.json(order);
    } catch (err: any) {
        res.status(500).json({ message: err.message });
    }
};
