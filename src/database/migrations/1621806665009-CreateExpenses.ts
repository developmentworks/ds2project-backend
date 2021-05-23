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
        default: 'now()'
      },
      {
        name: 'updates_at',
        type: 'timestamp',
        default: 'now()'
      },
      {
        name: 'user_id',
        type: 'integer',
        isNullable: false
      }
    ]

   
  });
  private userForeignKey = new TableForeignKey({
    columnNames:['user_id'],
    referencedColumnNames:['id'],
    referencedTableName: 'users',
    onDelete: 'CASCADE'
  })

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.table)
    await queryRunner.createForeignKey('expenses',this.userForeignKey)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('expenses',this.userForeignKey)
    await queryRunner.dropTable(this.table)
  }

}
