import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCategories1643063470466 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "categories",

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
            name: "type",
            type: "varchar(10)",
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
    await queryRunner.dropTable("categories");
  }
}
