import {Router}  from 'express';

const routes =  Router()

routes.get('/users',(req,res) => {
  return res.json({
    name: 'marcio da silva Santos'
  })
})


export {routes}