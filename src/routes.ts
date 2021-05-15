import {Router}  from 'express';
import { UserController } from './controllers/UserController';

const routes =  Router()
const usersController = new UserController()

routes.get('/users', usersController.show)
routes.post('/users', usersController.createUser)


export {routes}