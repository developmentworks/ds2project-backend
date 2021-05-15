import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { User } from "../models/User";
import { UserRepository } from "../repositories/UserRepository";

class UserController {

  async createUser(req:Request,res:Response){
    const {name,email}= req.body

    // let user = new User();
    // user.name = name
    // user.email = email

    const userRepository = getCustomRepository(UserRepository)

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
    const userRepository = getCustomRepository(UserRepository)

    const allusers = await userRepository.find()

    return res.status(200).json(allusers)
  }
}

export {UserController}