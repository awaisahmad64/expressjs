import express from 'express';
import { createStudent } from '../controllers/createStudent.js';
import { deleteStudent } from '../controllers/deleteStudent.js';
const router = express.Router();
router.get('/student', createStudent);
router.delete('/student/:id', deleteStudent);
export default router;
