import express from 'express';

const userRouter = express.Router();

userRouter.get('/edit', (req, res) => res.send('EDIT USER !'));

export default userRouter;
