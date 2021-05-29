import {Router}  from 'express';
import { ExpensesController } from './controllers/ExpensesController';
import { IncomingController } from './controllers/IncomingController';
import { UserController } from './controllers/UserController';

const routes =  Router()
const usersController = new UserController()
const expenseController = new ExpensesController()
const incomingsController = new IncomingController()

routes.get('/users', usersController.show)
routes.post('/users', usersController.createUser)

routes.get('/expenses', expenseController.show)
routes.post('/expenses', expenseController.createExpanse)

routes.get('/incomings', incomingsController.show)
routes.post('/incomings', incomingsController.createIncoming)


export {routes}