import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './database/DBconfig.js';
import cookieParser from 'cookie-parser';
import router from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
connectDB();

const PORT = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Server is running');
});
app.use('/', router);
app.use('/user',userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});