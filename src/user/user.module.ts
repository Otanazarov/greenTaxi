import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Taxy } from 'src/taxies/entities/taxy.entity';

@Module({
  imports:[TypeOrmModule.forFeature([User,Taxy])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
