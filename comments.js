// create a web server

// import express
import express from 'express';
const app = express();

import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import passport from 'passport';
import passportLocal from 'passport-local';
import expressSession from 'express-session';

const User = require('./models/user');

mongoose.connect('mongodb://localhost:27017/comments', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(expressSession);

app.use(passport.initialize());

app.use(passport.session());

passport.use(new passportLocal(User.authenticate()));

passport.serializeUser(User.serializeUser());

passport.deserializeUser(User.deserializeUser());

// create the home route
app.get('/', () => {
    // find
});
