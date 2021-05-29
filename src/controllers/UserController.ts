import { Request, Response } from "express";
import { getCustomRepository, getRepository } from "typeorm";
import { User } from "../models/User";


class UserController {

  async createUser(req:Request,res:Response){
    const {name,email}= req.body

    const userRepository = await getRepository(User)

    // verifica se ja existe um usuario com o email cadastarado
    const userAlreadyExists = await userRepository.findOne({
      email
    });

    if(userAlreadyExists){
     return res.status(400).json({error:"user already exists!"})
    }

    const user = userRepository.create({
      name, email
    })

    await userRepository.save(user)

    return res.status(201).json(user)
  }

  async show(req:Request,res:Response){

    const userRepository = await getRepository(User)

    const allUsers = await userRepository.find()
    
    console.log('allUsers')
    console.log(allUsers)
    
    return res.status(200).json(allUsers)
  }
}

export {UserController}