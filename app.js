import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import contactsRouter from './routes/contactsRouter.js';
import usersRouter from './routes/userRouter.js';
import authentificate from './middlewares/authentificate.js';

const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(express.static('public'));
app.use(express.json());

app.use('/contacts', authentificate, contactsRouter);
app.use('/users', usersRouter);

app.use((_, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.use((err, req, res, next) => {
  const { status = 500, message = 'Server error' } = err;
  res.status(status).json({ message });
});

export default app;
