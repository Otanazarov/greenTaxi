import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeoremConfig } from './common/config/typeorm-config';
import { UserModule } from './user/user.module';
import { TaxiesModule } from './taxies/taxies.module';
import { ConnUserWithTaxiModule } from './conn-user-with-taxi/conn-user-with-taxi.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeoremConfig), UserModule, TaxiesModule, ConnUserWithTaxiModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
