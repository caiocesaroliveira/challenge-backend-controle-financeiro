import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";

@Entity("incomes")
class Income {
  @PrimaryColumn()
  id?: string;

  @Column()
  description: string;

  @Column()
  amount: number;

  @Column()
  date: Date;

  // @Column()
  // category: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) this.id = uuidv4();
  }
}

export { Income };
