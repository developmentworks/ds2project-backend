import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateAccount1622401503339 implements MigrationInterface {

  private table = new Table({
    name: 'account',
    columns: [
      {
      name:'id',
      type:'integer',
      isPrimary: true,
      generationStrategy:'increment'
      },
      {
        name:'balance',
        type:'decimal(10,2)',
        isNullable: false,
        default: 0.0
      },
      {
        name:'has_expending_limit',
        type: 'boolean',
        default: false,
        isNullable:false
      },
      {
        name: 'expending_limit',
        type: 'decimal(10,2)',
        isNullable: false,
        default: 0.0
      },
      {
        name: 'has_economic_limit',
        type: 'boolean',
        isNullable: false,
        default: false
      },
      {
        name: 'economic_limit',
        type: 'decimal(10,2)',
        isNullable: false,
        default: 0.0
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
  })
    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(this.table)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable(this.table)
    }

}
