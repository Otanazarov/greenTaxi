import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';
import { env } from './env.config';
import { User } from 'src/user/entities/user.entity';
import { TaxiesController } from 'src/taxies/taxies.controller';
import { Taxy } from 'src/taxies/entities/taxy.entity';
import { ConnUserWithTaxi } from 'src/conn-user-with-taxi/entities/conn-user-with-taxi.entity';

export const typeoremConfig: MysqlConnectionOptions = {
  type: 'mysql',
  host: env.DB_HOST,
  port: env.DB_PORT,
  username: env.DB_USER,
  password: env.DB_PASS,
  database: env.DB_NAME,
  entities: [User,Taxy,ConnUserWithTaxi],
  synchronize: true,
};
