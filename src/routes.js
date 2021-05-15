const Router = require('express')

const routes = new Router()

routes.get('/users',(req,res) => {
  return res.json({
    name: 'marcio'
  })
})


module.exports = routes