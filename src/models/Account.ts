import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Expenses } from "./Expenses";
import { Incomings } from "./Incomings";
import { User } from "./User";

@Entity('account')
class Account{

@PrimaryGeneratedColumn()  
id:number

@Column()
balance: number

@Column({name: 'has_expending_limit'})
hasExpendingLimit: boolean

@Column({name: 'expending_limit'})
expendingLimit: number

@Column({name: 'has_economic_limit'})
hasEconomicLimit:boolean

@Column({name: 'economic_limit'})
economicLimit: number

@CreateDateColumn({name: 'created_at'})
createAt: Date

@CreateDateColumn({name: 'updated_at'})
updatedAt: Date

//Relations
@OneToOne(() => User, user => user.account,{eager:true})
@JoinColumn()
user:User

@OneToMany(() => Expenses,expense => expense.account,{eager:true})
expenses: Expenses[]

@OneToMany(() => Incomings, incoming => incoming.account,{eager:true})
incomings: Incomings[]

}

export{Account}