import express from 'express';

const PORT = 4000;

const app = express();

app.get('/', (req, res) => res.send('This is the first home for Express.'));

app.listen(PORT, () =>
  console.log(`✅ Server listening on http://127.0.0.1:${PORT}/`)
);
