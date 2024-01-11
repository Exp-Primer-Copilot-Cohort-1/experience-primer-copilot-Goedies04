// create a web server
// 1. load the express module
var express = require("express");
// 2. create an instance of express
var app = express();
// 3. load the body-parser module
var bodyParser = require("body-parser");
// 4. load the express-session module
var session = require("express-session");
// 5. load the mongodb module
var mongoClient = require("mongodb").MongoClient;
// 6. load the multer module
var multer = require("multer");
// 7. load the path module
var path = require("path");
// 8. load the fs module
var fs = require("fs");
// 9. load the cookie-parser module
var cookieParser = require("cookie-parser");
// 10. load the bcrypt module
var bcrypt = require("bcrypt");
// 11. load the nodemailer module
var nodemailer = require("nodemailer");
// 12. load the socket.io module
var http = require("http").Server(app);
var io = require("socket.io")(http);

// 13. set the view engine
app.set("view engine", "ejs");
// 14. set the views folder
app.set("views", path.join(__dirname, "views"));

// 15. set the body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// 16. set the express-session middleware
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true
  })
);

// 17. set the multer middleware
app.use(multer({ dest: "uploads/" }).any());

// 18. set the static middleware
app.use(express.static(path.join(__dirname, "public")));

// 19. set the cookie-parser middleware
app.use(cookieParser());

// 20. set the bcrypt middleware
const saltRounds = 10;
