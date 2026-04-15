const mongoose = require('mongoose');
const dns      = require('dns');

// Fix for Mongoose SRV DNS resolution issues on some networks
dns.setDefaultResultOrder('ipv4first');
dns.setServers(['8.8.8.8', '8.8.4.4']);

let isConnected = false;

const connectDB = async () => {
  if (isConnected) return;

  const uri = process.env.MONGODB_URI;

  if (!uri || uri.includes('YOUR_USERNAME')) {
    console.error('\n❌  MONGODB_URI is not configured!');
    console.error('    Open backend/.env and set your MongoDB Atlas URI.\n');
    process.exit(1);
  }

  try {
    await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 10000,
      socketTimeoutMS:          45000,
    });
    isConnected = true;
    console.log('✅  MongoDB Atlas connected');
  } catch (err) {
    console.error('❌  MongoDB connection error:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
