import { Module } from '@nestjs/common';
import { ConnUserWithTaxiService } from './conn-user-with-taxi.service';
import { ConnUserWithTaxiController } from './conn-user-with-taxi.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConnUserWithTaxi } from './entities/conn-user-with-taxi.entity';
import { User } from 'src/user/entities/user.entity';
import { Taxy } from 'src/taxies/entities/taxy.entity';

@Module({
  imports:[TypeOrmModule.forFeature([ConnUserWithTaxi,User,Taxy])],
  controllers: [ConnUserWithTaxiController],
  providers: [ConnUserWithTaxiService],
})
export class ConnUserWithTaxiModule {}
