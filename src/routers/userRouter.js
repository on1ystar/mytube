import express from 'express';
import {
  edit,
  logout,
  remove,
  see,
  requestGithubLogin,
  callbackGithubLogin
} from '../controllers/userController';

const userRouter = express.Router();

userRouter.get('/github/request', requestGithubLogin);
userRouter.get('/github/callback', callbackGithubLogin);
userRouter.get('/logout', logout);
userRouter.get('/edit', edit);
userRouter.get('/remove', remove);
userRouter.get('/:id', see);

export default userRouter;
