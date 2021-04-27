import express from 'express';

const globalRouter = express.Router();

globalRouter.get('/', (req, res) => res.send('HOME !'));

export default globalRouter;
