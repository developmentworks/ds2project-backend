import { Request, Response } from "express";
import { getCustomRepository, getRepository } from "typeorm";
import { Account } from "../models/Account";
import { Expenses } from "../models/Expenses";
import { User } from "../models/User";

class ExpensesController {

  async createExpanse(req:Request,res:Response){
    const {name,value,type, description, expenseDate,accountId}= req.body

    console.log(req.body)
    const expenseRepository = getRepository(Expenses)
    const accountRepository = getRepository(Account)

    // verifica se existe um usuario com o id informado
    const accountExists = await accountRepository.findOne({
      where:{id: accountId}
    });

    if(!accountExists){
     return res.status(400).json({error:"account does not exists!"})
    }

    const expense =  expenseRepository.create({
      name,
      value,
      description,
      type,
      expenseDate,
      account: accountExists
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