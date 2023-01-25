const express = require ('express');
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const users = require('./routes/user');
const Admin = require('./routes/admin')
const cors = require("cors");

const dotenv = require("dotenv");
dotenv.config();
mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGODB_CONNECTION).then(() => {
  console.log("connection success");
})
  .catch((err) => {
      console.log(err);
  });

const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/',users);
app.use('/admin',Admin)

app.listen(process.env.PORTNO, () => {
  console.log("server started listening to port");
});