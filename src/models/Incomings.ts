import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity('incomings')
class Incomings{

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

  @CreateDateColumn({name:'incoming_date'})
  incomingDate:Date
  
  @CreateDateColumn({name:'created_at'})
  createdAt:Date

   
  @CreateDateColumn({name:'Updated_at'})
  UpdatedAt:Date

  // Relations
  @ManyToOne(() => User, user => user.incomings)
  incomingUser: User

}
export {Incomings}