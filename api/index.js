
import express from 'express';
import dotenv from 'dotenv';
import path from 'path'; // Import path module
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import userRouter from './routes/userRoutes.js';
import testRouter from './routes/testRoute.js'; // Import test routes
import orderRouter from './routes/orderRoutes.js'; // Import order routes
import authRouter from './routes/authRoutes.js'; // Import auth routes

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(bodyParser.json()); // Optional, as express.json() is sufficient

// Enable CORS
app.use(cors());

// Serve static files from the 'dist' directory
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '/client/dist')));

// Use routes
app.use('/api/users', userRouter); // Routes related to user operations
app.use('/api/tests', testRouter);   // Test route
app.use('/api/orders', orderRouter); // Order related routes
app.use('/api/auth', authRouter);    // Authentication routes

// Serve the index.html file for any other requests
/* app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
}); */

// Connect to MongoDB
const MONGODB_URI = process.env.MONGODB_URI; // Ensure you have this in your .env file
mongoose.connect(MONGODB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});