import express from 'express';
import {
  createUser,
  showUser,
  deleteUser,
  updateUser,
} from '../controller/createUser.js';
const router = express.Router();
router.post('/', createUser);
router.get('/', showUser);
router.delete('/:id', deleteUser);
router.put('/:id', updateUser);

export default router;
