const express = require('express')
const chalk = require('chalk')

const app = express()

// requisição get
app.get('/users', (req,res) => {
  res.json(
    {
      name: "Marcio",
      idade: 34,
      cpf: "349183842384"
    })

})

app.listen(3000,() =>{
  console.log(chalk.green.bold('backend running...'))
})