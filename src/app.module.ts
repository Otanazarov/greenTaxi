import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeoremConfig } from './common/config/typeorm-config';
import { UserModule } from './user/user.module';
import { TaxiesModule } from './taxies/taxies.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeoremConfig), UserModule, TaxiesModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
