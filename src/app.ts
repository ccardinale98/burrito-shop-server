import express from 'express';
import bodyParser from 'body-parser';
import burritoRoutes from './routes/burritoRoutes';
import orderRoutes from './routes/orderRoutes';
import cors from 'cors';

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use('/api/burrito', burritoRoutes);
app.use('/api/orders', orderRoutes);

export default app;
