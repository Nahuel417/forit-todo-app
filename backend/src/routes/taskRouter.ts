import { Router } from 'express';
import { allTask, createTask, deleteTask, taskById, updateTask } from '../controllers/taskController';
const taskRouter = Router();

taskRouter.get('/task', allTask);
taskRouter.get('/task/:id', taskById);

taskRouter.post('/task', createTask);

taskRouter.put('/task/:id', updateTask);

taskRouter.delete('/task/:id', deleteTask);

export default taskRouter;
