import express from 'express';

import { createUser, getUsers, getUser, deleteUser, updateUser } from '../controllers/users.js';

const router = express.Router();

// Default Homepage
router.get('/', getUsers);

// Creating a new user
router.post('/', createUser);

// Getting the user by id
router.get('/:id', getUser);

// Deleting the user by id
router.delete('/:id', deleteUser);

// Updating the user
router.patch('/:id', updateUser);

export default router;
