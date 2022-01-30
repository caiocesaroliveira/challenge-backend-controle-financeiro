import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateIncomes1643572428982 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "incomes",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "description",
            type: "varchar(500)",
          },
          {
            name: "amount",
            type: "decimal(10,2)",
          },
          {
            name: "date",
            type: "date",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("incomes");
  }
}
