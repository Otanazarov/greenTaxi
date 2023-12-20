import { Module } from '@nestjs/common';
import { TaxiesService } from './taxies.service';
import { TaxiesController } from './taxies.controller';

@Module({
  controllers: [TaxiesController],
  providers: [TaxiesService],
})
export class TaxiesModule {}
