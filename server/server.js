const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());


// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Example Schema and Model
const orderSchema = new mongoose.Schema({
  productName: String,
  size: String,
  color: String,
  deliveryDate: String,
  comment: String,
});

const Order = mongoose.model('Order', orderSchema);

// Example Route
app.post('/api/orders', async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    await newOrder.save();
    res.status(201).json({ message: 'Order saved successfully', order: newOrder });
  } catch (error) {
    res.status(500).json({ message: 'Failed to save order', error });
  }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
