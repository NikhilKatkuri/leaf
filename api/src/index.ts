import express from 'express';
import filesRouter from './routes/files';

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/api/files', filesRouter);

app.get('/', (_req, res) => {
  res.send('Hello, World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
