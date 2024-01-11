import 'dotenv/config';
import app from './app';
import mongoose from 'mongoose';
import config from './config';

const PORT = process.env.PORT || 3000;

mongoose.connect(config.db.DB_CONNECTION_STRING)
    .then(() => {
        console.log('MongoDB connected');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch(err => {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    });

