import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateExpenses1621806665009 implements MigrationInterface {
 
  private table = new Table({
    name: 'expenses',
    columns:[
      {
        name: 'id',
        type:'integer',
        isPrimary:true,
        isGenerated: true,
        generationStrategy: 'increment',
        isNullable: false,
      },
      {
        name:'name',
        type:'varchar',
        isNullable:false
      },
      {
        name: 'value',
        type: 'decimal(10,2)',
        isNullable: false
      },
      {
        name:'description',
        type: 'varchar',
        isNullable: false
      },
      {
        name: 'type',
        type: 'varchar',
        isNullable: false
      },
      {
        name: 'expense_date',
        type: 'date',
        isNullable: false
      },
      {
        name: 'created_at',
        type: 'timestamp',
        isNullable: false
      },
      {
        name: 'updates_at',
        type: 'timestamp',
        isNullable: false
      }
    ]

  });

  

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.table)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.table)
  }

}
