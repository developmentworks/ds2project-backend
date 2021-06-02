import { Column, CreateDateColumn, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Account } from "./Account";
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
  @OneToOne(() => Account, account=> account.user)
  account: Account
  
}
export {User}