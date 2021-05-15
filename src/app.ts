require('dotenv/config');
import "reflect-metadata";
import * as express  from 'express';
import  cors from 'cors';
import {routes} from './routes';


const app = express()
app.use(express.json())
app.use(routes)

 
export {app}
