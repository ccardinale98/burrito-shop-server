import express from 'express';
import { getOrders, addOrder, getOrderById } from '../controllers/orderController';

const router = express.Router();

router.get('/', getOrders);

router.post('/', addOrder);

router.get('/:id', getOrderById);

export default router;
