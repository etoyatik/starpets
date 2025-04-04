import { Router } from 'express';
import userR from './user.route.js';

const api = new Router();

api.use('/users/', userR);

export default api;
