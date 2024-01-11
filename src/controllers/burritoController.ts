import Burrito from '../models/Burrito';

export const getBurritos = async (req: any, res: any) => {
    try {
        console.log("hello wrld 1");
        const burritos = await Burrito.find();
        res.json(burritos);
    } catch (err: any) {
        res.status(500).json({ message: err.message });
    }
};

export const addBurrito = async (req: any, res: any) => {
    console.log("hello wrld");
    const burrito = new Burrito({
        name: req.body.name,
        size: req.body.size,
        price: req.body.price
    });

    try {
        const newBurrito = await burrito.save();
        res.status(201).json(newBurrito);
    } catch (err: any) {
        res.status(400).json({ message: err.message });
    }
};
