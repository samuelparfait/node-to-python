import express from 'express';

import { errorHandler } from '@/lib/middlewares';
import askPython from '@/routes/ask-python';

const app = express();

app.use(express.json());
app.use(errorHandler);

app.use('/api/ask-python', askPython);

const port = process.env.PORT || 3001;

const server = app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
