import { Router } from 'express';
import userC from '../controllers/user.controller.js';
import validateBodyUserBalance from '../middlewares/validateBodyUserBalance.js';

const userR = new Router();

userR.patch('/:id/balance', validateBodyUserBalance, userC.updateBalance);

export default userR;
