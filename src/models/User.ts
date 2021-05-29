import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Expenses } from "./Expenses";
import { Incomings } from "./Incomings";

@Entity('users')
class User{

  @PrimaryGeneratedColumn()
  id:number

  @Column()
  name: string
  
  @Column()
  email:string
  
  @CreateDateColumn({name:'created_at'})
  createdAt:Date

  // Relations
  @OneToMany(() => Expenses,expense => expense.expenseUser,{eager:true})
  expenses: Expenses[]

  @OneToMany(() => Incomings, incoming => incoming.incomingUser,{eager:true})
  incomings: Incomings[]
}
export {User}