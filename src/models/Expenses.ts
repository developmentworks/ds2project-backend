import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity('expenses')
class Expenses{

  @PrimaryGeneratedColumn()
  id:number

  @Column()
  value: number

  @Column()
  name:string

  @Column()
  type:string

  @Column()
  description:string

  @CreateDateColumn({name:'expense_date'})
  expenseDate:Date
  
  @CreateDateColumn({name:'created_at'})
  createdAt:Date

   
  @CreateDateColumn({name:'Updated_at'})
  UpdatedAt:Date

  // Relations
  @ManyToOne(() => User, user => user.expenses)
  expenseUser: User

}
export {Expenses}