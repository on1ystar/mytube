import './db';
import './models/Video';
import app from './server';

const PORT = 4000;

app.listen(PORT, () =>
  console.warn(`✅ Server listening on http://127.0.0.1:${PORT}/`)
);
