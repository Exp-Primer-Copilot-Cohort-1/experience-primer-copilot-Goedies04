// create a web server
// create a route, handler function
// listen for incoming requests
// start the server and listen on a port

// we use express to create a web server
// const express = require('express');
// const app = express();
// const port = 3000;
// app.get('/', (req, res) => res.send('Hello World!'));
// app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// we use express to create a web server
const express = require('express');
const app = express();
const port = 3000;
const comments = require('./data/comments');

// express.static is a built in middleware function to serve static files.
// We are telling express server public folder is the place to look for the static files
app.use(express.static('public'));

// set the view engine to ejs
app.set('view engine', 'ejs');

// route for home page
app.get('/', (req, res) => {
  // render `home.ejs` with the list of posts
  res.render('home', { comments: comments });
});

// route for post page
app.get('/comments/:id', (req, res) => {
  // find the post in the `posts` array
  const comment = comments.filter((comment) => {
    return comment.id == req.params.id;
  })[0];

  // render the `post.ejs` template with the post content
  res.render('comment', { comment: comment });
}
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
