/* eslint-disable prefer-destructuring */
/* eslint no-console: ["error", { allow: ["warn", "error"] }] */

import './db';
import express from 'express';
import morgan from 'morgan';
import globalRouter from './routers/globalRouter';
import userRouter from './routers/userRouter';
import videoRouter from './routers/videoRouter';

const PORT = 4000;

const app = express();
const logger = morgan('dev');

app.set('views', process.cwd() + '/src/views');
app.set('view engine', 'pug');
app.use(logger);
app.use(express.urlencoded({ extended: true }));
app.use('/', globalRouter);
app.use('/users', userRouter);
app.use('/videos', videoRouter);

app.listen(PORT, () =>
  console.warn(`✅ Server listening on http://127.0.0.1:${PORT}/`)
);
