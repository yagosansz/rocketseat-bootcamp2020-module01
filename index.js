const express = require('express'); // exports a function

// Notice that express is a function that returns an object
// with many functionalities
// console.log(express);

const server = express();

server.use(express.json());

// Query params = ?test=1
// Route params = /test/1
// Request body = { "name": "Yago", "email": "yago@me.com" }

// CRUD => Create, Read, Update, Delete

const users = ['Edilza', 'Yago', 'Antenor'];


// Global middleware used for logging
server.use((req, res, next) => {
  console.time('Request')
  console.log(`Method: ${req.method}; URL: ${req.url}`);

  next();

  console.timeEnd('Request');
});

function checkUserNameExists(req, res, next) {
  if(!req.body.name) {
    return res.status(400).json({ error: 'User name is required' });
  }

  return next();
}

function checkUserInArray(req, res, next) {
  const { index } = req.params;
  const user = users[index];

  if(!user) {
    return res.status(400).json({ error: 'User does not exists' });
  }

  // Middlewares can modify 'req' and 'res' variables
  // e.g.: Function that lists a single pre-defined user (line 59)
  req.user = user;

  return next();
}

// Lists all users
server.get('/users', (req, res) => {
  return res.json(users);
});

// Lists a single pre-defined user
server.get('/users/:index', checkUserInArray, (req, res) => {
  //const name = req.query.name;
  //const { index } = req.params;

  //return res.json(users[index]);
  return res.json(req.user);
});

// Create a new user
server.post('/users', checkUserNameExists, (req, res) => {
  const { name } = req.body;

  users.push(name);

  return res.json(users);
});

// Update an user
server.put('/users/:index', checkUserInArray, checkUserNameExists, (req, res) => {
  const { index } = req.params;
  const { name } = req.body;

  users[index] = name;

  return res.json(users);
});

// Remove an user
server.delete('/users/:index', checkUserInArray, (req, res) => {
  const index = req.params;

  users.splice(index, 1);

  // A successful status code is enough when deleting something!
  return res.send();
});

server.listen(3000);

