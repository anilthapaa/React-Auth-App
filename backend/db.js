const mongoose = require('mongoose');
require('dotenv').config();

const mongoUri = process.env.MONGO_LOCAL_URI || 'mongodb://localhost:27017/react_auth_db';

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // Uncomment below if using SSL with MongoDB Atlas or similar
  // ssl: true,
  // sslCA: fs.readFileSync(__dirname + '/DigiCertGlobalRootCA.crt.pem')
})
.then(() => {
  console.log('✅ Connected to MongoDB database!');
})
.catch((err) => {
  console.error('❌ Error connecting to MongoDB: ', err);
});

module.exports = mongoose;

// This is the mongo DB connection logic
