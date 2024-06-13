// const User = require('../models/user');
// const passport = require('passport');
// var JwtStrategy = require('passport-jwt').Strategy;
// var  ExtractJwt = require('passport-jwt').ExtractJwt;
import dotenv from 'dotenv';
dotenv.config();

import User from '../models/user.js';
import passport from 'passport';
import { Strategy, ExtractJwt } from 'passport-jwt';


var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.SECRETE_KEY;
passport.use(new Strategy(opts, async function(jwt_payload, done) {
    // console.log("=========email===========", jwt_payload);
    try {
        const user = await User.findById(jwt_payload._id);
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
        }

    } catch (error) {
        console.log("error in finding User");
        return;
    }

}))

// module.exports.passport;
export default passport;



// passport.use(new JwtStrategy(opts, async function(jwt_payload, done) {
//     try {

//         console.log("=========email===========", jwt_payload.email);
//         const doctor = await Doctor.findById(jwt_payload._id);
//         if (doctor) {
//             return done(null, doctor);
//         } else {
//             return done(null, false);
//         }

//     } catch (error) {
//         console.log("error in finding User");
//         return;
//     }

// }));



// Doctor.findOne({ email: jwt_payload.email }, function(err, user) {
//     if (err) {
//         return done(err, false);
//     }
//     if (user) {
//         return done(null, user);
//     } else {
//         return done(null, false);
//         // or you could create a new account
//     }

// });