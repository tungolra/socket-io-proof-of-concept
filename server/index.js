import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from 'cors'

// Routes
import auth from "./routes/auth.js"
import users from "./routes/users.js"
import chat from "./routes/chat.js"
import messages from "./routes/messages.js"

const app = express();

//to serve images for public
app.use(express.static('public'))
app.use('./images', express.static('images'))
// Middlewares
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors())

dotenv.config();

mongoose
  .connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(process.env.PORT, () =>
      console.log(`Listening on port ${process.env.PORT}`)
    )
  )
  .catch((error) => console.log(error));

  // usage of routes
  app.use('/auth', auth)
  app.use('/user', users)
  app.use("/chat", chat)
  app.use("/message", messages)