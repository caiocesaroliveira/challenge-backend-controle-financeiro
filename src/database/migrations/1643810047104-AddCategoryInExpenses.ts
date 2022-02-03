import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddCategoryInExpenses1643810047104 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "expenses",
      new TableColumn({
        name: "category",
        type: "varchar",
        length: "15",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("expenses", "category");
  }
}
