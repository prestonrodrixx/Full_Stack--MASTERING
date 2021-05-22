import express from 'express';
import bodyParser from 'body-parser';

import usersRoutes from './routes/users.js';

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/users', usersRoutes);

app.get('/', (req, res) => {
  res.send('Hello Preston');
});

app.listen(PORT, () =>
  console.log(`Server Running on Port: http://localhost:${PORT}`)
);
