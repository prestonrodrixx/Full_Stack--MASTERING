import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

let users = [];

router.get('/', (req, res) => {
  res.send(users);
});



// Creating a new user
router.post('/', createUser);

// Getting the user by id
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const foundUser = users.find((user) => user.id == id);
  res.send(foundUser);
});

// Deleting the user by id
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id != id);
  res.send(`User with id ${id} Deleted.`);
});

// Updating the user
router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const { firstName, lastname, age } = req.body;

  const user = users.find((user) => user.id == id);

  if (firstName) user.firstName = firstName;
  if (lastname) user.lastname = lastname;
  if (age) user.age = age;

  res.send(`User with id ${id} Updated.`);
});

export default router;
