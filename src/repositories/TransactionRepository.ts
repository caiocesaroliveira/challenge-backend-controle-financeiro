import { EntityRepository, Repository } from "typeorm";

import { TransactionEntity } from "../entities/TransactionEntity";

@EntityRepository(TransactionEntity)
class TransactionRepository extends Repository<TransactionEntity> {}

export default TransactionRepository;
