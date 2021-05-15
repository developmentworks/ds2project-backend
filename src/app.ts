require('dotenv/config');
import "reflect-metadata";
import * as express  from 'express';
import  './database'
import {routes} from './routes';
import CreateConnection from './database'

CreateConnection()
const app = express()
app.use(express.json())
app.use(routes)

 
export {app}
