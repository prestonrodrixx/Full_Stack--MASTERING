import express from 'express';

const router = express.Router();

const users = [
  {
    firstName: 'Preston',
    lastName: 'Rodrigues',
    age: 24,
  },
  {
    firstName: 'Preston',
    lastName: 'Rodrigues',
    age: 24,
  },
];

router.get('/', (req, res) => {
  console.log(users);
  res.send(users);
});

router.post('/', (req, res) => {
  console.log(req.body);
  const user = req.body;
  users.push(user);
  res.send(`User with the name ${user.firstName} added.`);
});

export default router;
