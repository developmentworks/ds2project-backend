import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Incomings } from "../models/Incomings";
import { User } from "../models/User";

class IncomingController {

  async createIncoming(req:Request, res:Response){
    const {name,value,type, description, incomingDate,userId}= req.body

    console.log(req.body)
    const userRepository = getRepository(User)
    const incomingRepository = getRepository(Incomings)

    // verifica se existe um usuario com o id informado
    const userAlreadyExists = await userRepository.findOne({
      where:{id: userId}
    });

    if(!userAlreadyExists){
     return res.status(400).json({error:"user does not exists!"})
    }

    const incoming =  incomingRepository.create({
      name,
      value,
      description,
      type,
      incomingDate,
      incomingUser:userAlreadyExists
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