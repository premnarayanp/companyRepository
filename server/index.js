import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors'
const port = process.env.PORT || 8362;
import express from 'express';
import db from './config/mongoose.js';
import passport from 'passport';
import passportJWT from './config/passport-jwt-strategy.js';

const app = express();
app.use(cors());

// use passport...
app.use(passport.initialize());

// use post request  url
app.use(express.urlencoded());

//for json req/res
app.use(express.json());

//use routes

// app.use('/', require('./routes'));
import routes from './routes/index.js';
app.use('/', routes);

app.listen(port, function (error) {

    if (error) {
        console.log(`Error in running the server:${error}`);
    }
    console.log(`Server is running on port: ${port}`);
});