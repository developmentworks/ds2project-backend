import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Account } from "../models/Account";
import { User } from "../models/User";

class AccountController{
  async showAccounts(req:Request, res:Response){
    const accountRepository = getRepository(Account)

    const accounts = await accountRepository.find()

    return res.status(200).json(accounts)
  }

  async createAccount(req: Request, res: Response){
    const {balance,hasExpendingLimit,expendingLimit, hasEconomicLimit,economicLimit, userId} = req.body
    const userRepository = getRepository(User)
    const accountRepository = getRepository(Account)

    // verifica se existe um usuario com o id informado
    const userAlreadyExists = await userRepository.findOne({
      where:{id: userId}
    });

    if(!userAlreadyExists){
     return res.status(400).json({error: 'user does not exists'})
    }

    const account = await accountRepository.create({
      balance,
      hasExpendingLimit,
      expendingLimit,
      hasEconomicLimit,
      economicLimit,
      user: userAlreadyExists
    })
    await accountRepository.save(account)
    return res.status(201).json(account)
  }



}


export{AccountController}