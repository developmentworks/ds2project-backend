import { Request, Response } from "express";
import { getCustomRepository, getRepository } from "typeorm";
import { Expenses } from "../models/Expenses";
import { User } from "../models/User";

class ExpensesController {

  async createExpanse(req:Request,res:Response){
    const {name,value,type, description, expenseDate,userId}= req.body

    console.log(req.body)
    const userRepository = getRepository(User)
    const expenseRepository = getRepository(Expenses)

    // verifica se existe um usuario com o id informado
    const userAlreadyExists = await userRepository.findOne({
      where:{id: userId}
    });

    if(!userAlreadyExists){
     return res.status(400).json({error:"user does not exists!"})
    }

    const expense =  expenseRepository.create({
      name,
      value,
      description,
      type,
      expenseDate,
      expenseUser:userAlreadyExists
    })
    
    await expenseRepository.save(expense)
    return res.status(201).json(expense)

  }

  async show(req:Request,res:Response){
    const expenseRepository = getRepository(Expenses)

    const allExpenses = await expenseRepository.find()
    
    console.log('allUsers')
    console.log(allExpenses)
    

    return res.status(200).json(allExpenses)
  }
}

export {ExpensesController}