import { Module } from '@nestjs/common';
import { TaxiesService } from './taxies.service';
import { TaxiesController } from './taxies.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Taxy } from './entities/taxy.entity';
import { User } from 'src/user/entities/user.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Taxy,User])],
  controllers: [TaxiesController],
  providers: [TaxiesService],
})
export class TaxiesModule {}
