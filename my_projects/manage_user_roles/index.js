const express = require('express');
const app = express();
const { ROLE, users } = require('./data');
const { authUser, authRole } = require('./basicAuth');
const projectRouter = require('./routes/projects');

app.use(express.json());
app.use(setUser);

app.get('/', (req, res) => {
  res.send('Home Page');
});

app.use('/projects', projectRouter);

// Authentication the user
app.get('/dashboard', authUser, (req, res) => {
  res.send('Dashboard Page');
});

// Authentication the user with role
app.get('/admin', authUser, authRole(ROLE.ADMIN), (req, res) => {
  res.send('Admin Page');
});

function setUser(req, res, next) {
  const userId = req.body.userId;
  if (userId) {
    req.user = users.find((user) => user.id === userId);
  }
  next();
}

app.listen(3000, () => {
  console.log('Server Started');
});
