credits: [ZainRK](https://github.com/ZainRk/MERN-SocialMedia-ZAINKEEPSCODE/tree/master/server)

backend server - installations
- install express
- install mongoose
- install body-parser
    - middleware that checks over http requests that comes from client-side
    - double checks data in http request is valid to run on the server - protects server before it crashes
- install nodemon

setting up the server
- package.json
    - change to: 
        "type": "module", // to enable imports
        "scripts": {
        "start": "nodemon index.js" // whenever we write start on terminal, it will start index.js
        },
- index.js
    - import express from "express";
    - import bodyParser from "body-parser";

    //
    - import mongoose from "mongoose";

    - const app = express();
    - app.use(bodyParser.json({ limit: "30mb", extended: true }));
    - app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
    ** find the url from mongo cloud
    - mongoose.connect(
  "mongodb+srv://rtungol:Z0kd9YlCLIqHtQEq@studysmart.rdpxpmk.mongodb.net/socket-io-proof-of-concept?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true}
).then(()=>app.listen(3001, ()=> console.log("Listening to port 3001")))
        - {useNewUrlParser...}... specfies these properties as recommended by mongoDB
        - .then()...
    ** move database url to env file! 
    ** this is usually put in a config file within database.js! 
    //

- create MVC folders
    - Authentication Route
        - routes: touch auth.js
            - Add: 
                import express from "express"
                const router = express.Router()
                router.get('/', async(req, res) => {res.send("Authentication Route")})
                export default router
        - index.js: 
            - import auth route
                import auth from "./routes/auth"
            - set up routes:
                app.use('/auth', auth)
    - User Model
        - models: 
            - set up userSchema
    - Auth Controller (can check functionality with thunder client)
        - controller
            - set up function to register new user
                - connect to route
                - install/import bcrypt
                - set SALT_ROUNDS var
                - set hashpass var 
            - set up login function
            - set up update user function
