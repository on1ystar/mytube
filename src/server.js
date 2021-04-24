/* eslint-disable prefer-destructuring */
import express from 'express';
import morgan from 'morgan';

const PORT = 4000;

const app = express();
const logger = morgan('dev');

const handleHome = (req, res) =>
  res.send('This is the first home for Express.');

app.use(logger);
app.get('/', handleHome);

app.listen(PORT, () =>
  console.log(`✅ Server listening on http://127.0.0.1:${PORT}/`)
);
