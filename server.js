const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const Items = require('./routes/api/Items')

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

// DB Config

const db = require("./config/keys").mongoURI;

// connect to Mongo
mongoose
  .connect(db)
  .then(() => console.log("Mongodb connected"))
  .catch((err) => console.log(err));

  app.use('/api/items',Items)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
