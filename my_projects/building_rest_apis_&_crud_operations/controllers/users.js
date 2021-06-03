import { v4 as uuidv4 } from 'uuid';

let users = [];

export const createUser = (req, res) => {
  const user = req.body;
  const userId = uuidv4();
  const userWithId = { ...user, id: userId }; // Added ID to the User
  users.push(userWithId);
  res.send(`User with the name ${user.firstName} added.`);
};

export const getUsers = (req, res) => {
  res.send(users);
};

export const getUser = (req, res) => {
  const { id } = req.params;
  const foundUser = users.find((user) => user.id == id);
  res.send(foundUser);
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id != id);
  res.send(`User with id ${id} Deleted.`);
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  const { firstName, lastname, age } = req.body;

  const user = users.find((user) => user.id == id);

  if (firstName) user.firstName = firstName;
  if (lastname) user.lastname = lastname;
  if (age) user.age = age;

  res.send(`User with id ${id} Updated.`);
};
