import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompetenciasModule } from './competencias/competencias.module';

@Module({
  imports: [CompetenciasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
