import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Account } from "../models/Account";
import { Incomings } from "../models/Incomings";
import { User } from "../models/User";

class IncomingController {

  async createIncoming(req:Request, res:Response){
    const {name,value,type, description, incomingDate,accountId}= req.body

    console.log(req.body)
    const accountRepository = getRepository(Account)
    const incomingRepository = getRepository(Incomings)

    // verifica se existe um usuario com o id informado
    const accountExists = await accountRepository.findOne({
      where:{id: accountId}
    });

    if(!accountExists){
     return res.status(400).json({error:"account does not exists!"})
    }

    const incoming =  incomingRepository.create({
      name,
      value,
      description,
      type,
      incomingDate,
      account:accountExists
    })
    
    await incomingRepository.save(incoming)
    return res.status(201).json(incoming)

  }

  async show(req:Request,res:Response){
    const incomingRepository = getRepository(Incomings)

    const allIncomings = await incomingRepository.find()
    
    console.log('allUsers')
    console.log(allIncomings)
    

    return res.status(200).json(allIncomings)
  }
}

export {IncomingController}