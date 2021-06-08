import { Request, Response} from "express";
import { getCustomRepository, getRepository } from "typeorm";
import { User } from "../models/User";
import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";


class AuthController {

  async authenticate(req: Request, res: Response) {
    const { email, password } = req.body
    const userRepository = getRepository(User)

    const user = await userRepository.findOne({ where: { email } })
    
    if (!user) {
      return res.sendStatus(401)
    }

    const isValidPassword = await bcrypt.compare(password, user.password)

    if (!isValidPassword) {
      return res.sendStatus(401)
    }
    
    const token = jwt.sign({ id: user.id }, process.env.SECRET, { expiresIn: '1d' })

    delete user.password

    return res.json({user, token})
  }
}

export {AuthController}