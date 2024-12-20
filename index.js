const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Kết nối MongoDB
mongoose.connect('mongodb+srv://nguyenso1:123@cluster0.nzd6o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
}).then(() => {
    console.log('Connected to MongoDB Atlas');
}).catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});

// Middleware
app.use(cors());
app.use(express.json()); // Thêm middleware để parse JSON requests

// Định nghĩa route cho các API
const tripRoute = require('./routes/trip.route');
const addressRoute = require('./routes/address.route');
const userRoute = require('./routes/users.route');

app.use('/user', userRoute);
app.use('/address', addressRoute);
app.use('/trip', tripRoute);

// Route chính
app.get('/', (req, res) => res.send(' nguyen cd7'));

// Khởi động server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
