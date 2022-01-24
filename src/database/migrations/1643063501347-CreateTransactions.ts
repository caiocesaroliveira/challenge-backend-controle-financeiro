import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class CreateTransactions1643063501347 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "transactions",
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
            name: "category_id",
            type: "uuid",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );

    await queryRunner.createForeignKey(
      "transactions",
      new TableForeignKey({
        columnNames: ["category_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "categories",
        name: "fk_category_transactions",
        onDelete: "CASCADE",
        onUpdate: "SET NULL",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      "transactions",
      "fk_category_transactions"
    );

    await queryRunner.dropTable("transactions");
  }
}
