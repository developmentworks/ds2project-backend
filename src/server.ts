import {app} from './app'
const chalk = require('chalk')


app.listen(3000,() =>{
  console.log(chalk.green.bold('backend running...'))
})