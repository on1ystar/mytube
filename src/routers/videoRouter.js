import express from 'express';

const videoRouter = express.Router();

videoRouter.get('/watch', (req, res) => res.send('WATCH VIDEO !'));

export default videoRouter;
