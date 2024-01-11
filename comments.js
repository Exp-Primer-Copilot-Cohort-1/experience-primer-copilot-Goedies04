// create a web server
const express = require('express');
const bodyParser = require('body-parser');
const comments = require('./comments');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.get('/api/comments', (req, res) => {
  console.log('GET /api/comments');
  res.json(comments.getAll());
});
app.post('/api/comments', (req, res) => {
  console.log('POST /api/comments');
  const comment = req.body;
  const name = comment.name;
  const content = comment.content;
  if (!name || !content) {
    res.status(400).end();
    return;
  }
  const id = comments.add(name, content);
  res.json(comments.get(id));
});
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
// Path: comments.js
// create a module
const comments = {};
let nextId = 1;
comments._comments = [
  {
    id: 0,
    name: 'Bob',
    content: 'Hello world',
    createdAt: new Date(),
  },
];
comments.add = function(name, content) {
  const comment = {
    id: nextId++,
    name,
    content,
    createdAt: new Date(),
  };
  comments._comments.unshift(comment);
  return comment.id;
};
comments.getAll = function() {
  return comments._comments;
};
comments.get = function(id) {
  const index = comments._comments.findIndex(comment => comment.id === id);
  if (index === -1) {
    return null;
  }
  return comments._comments[index];
};
module.exports = comments;
// Path: index.html
const html = `
    <div>
        <meta charset="utf-8">
        <title>Comments</title>
        <link rel="stylesheet" href="style.css" />
    </div>
`;
// Path: index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
ReactDOM.render(<App />, document.getElementById('app'));
// Path: App.js
import React from 'react';
import CommentBox from './CommentBox';
const App = () => (
    <div className="container">
        {/* Your JSX code here */}
    </div>
);
