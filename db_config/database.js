const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
const db = async () => {
  mongoose.set('strictQuery', true);
  await mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  console.log("Database connected.(TEST)");
}

module.exports = db;