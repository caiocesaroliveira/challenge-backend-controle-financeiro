import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuidv4 } from "uuid";

import { TransactionEntity } from "./TransactionEntity";

@Entity("categories")
class CategoryEntity {
  @PrimaryColumn()
  id?: string;

  @Column()
  description: string;

  @Column()
  type: string;

  @CreateDateColumn()
  created_at: Date;

  @OneToMany((type) => TransactionEntity, (category) => CategoryEntity)
  transactions: TransactionEntity[];

  constructor() {
    if (!this.id) this.id = uuidv4();
  }
}

export { CategoryEntity };
