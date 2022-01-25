import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuidv4 } from "uuid";

import { CategoryEntity } from "./CategoryEntity";

@Entity("transactions")
class TransactionEntity {
  @PrimaryColumn()
  id?: string;

  @Column()
  description: string;

  @Column()
  amount: number;

  @Column()
  date: Date;

  @CreateDateColumn()
  created_at: Date;

  @ManyToOne((type) => CategoryEntity, (transactions) => TransactionEntity, {
    eager: true,
  })
  @JoinColumn({ name: "category_id" })
  category: CategoryEntity;

  constructor() {
    if (!this.id) this.id = uuidv4();
  }
}

export { TransactionEntity };
