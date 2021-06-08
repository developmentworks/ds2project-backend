import { Column, CreateDateColumn, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn, BeforeInsert } from "typeorm";
import { Account } from "./Account";
import { Expenses } from "./Expenses";
import { Incomings } from "./Incomings";
import * as bcrypt from 'bcryptjs';

@Entity('users')
class User{

  @PrimaryGeneratedColumn()
  id:number

  @Column()
  name: string
  
  @Column()
  email: string
  
  @Column()
  password: string

  @BeforeInsert()
  hashPassword() {
    this.password = bcrypt.hashSync(this.password)
  }
  
  @CreateDateColumn({name:'created_at'})
  createdAt:Date

  // Relations
  @OneToOne(() => Account, account=> account.user)
  account: Account
  
}
export {User}