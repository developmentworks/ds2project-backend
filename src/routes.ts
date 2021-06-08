import { Router } from 'express';

import authMiddleware from "./middlewares/authMiddleware";

import { AccountController } from './controllers/AccountController';
import { ExpensesController } from './controllers/ExpensesController';
import { IncomingController } from './controllers/IncomingController';
import { UserController } from './controllers/UserController';
import { AuthController } from './controllers/AuthController';

const routes = Router()
const usersController = new UserController()
const expenseController = new ExpensesController()
const incomingsController = new IncomingController()
const accountController = new AccountController()
const authController = new AuthController()

routes.get('/users', authMiddleware, usersController.show)
routes.post('/users', usersController.createUser)

routes.get('/expenses', authMiddleware,expenseController.show, )
routes.post('/expenses', authMiddleware, expenseController.createExpanse)

routes.get('/incomings', authMiddleware,incomingsController.show)
routes.post('/incomings', authMiddleware, incomingsController.createIncoming)

routes.get('/accounts', authMiddleware, accountController.showAccounts)
routes.post('/accounts', authMiddleware,accountController.createAccount)

routes.post('/auth', authController.authenticate)


export {routes}