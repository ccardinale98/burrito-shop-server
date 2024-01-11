import express from 'express';
import { getBurritos, addBurrito } from '../controllers/burritoController';

const router = express.Router();

router.get('/', getBurritos);

router.post('/', addBurrito);

export default router;
