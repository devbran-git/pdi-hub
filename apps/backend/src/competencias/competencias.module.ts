import { Module } from '@nestjs/common';
import { CompetenciasController } from './competencias.controller';
import { CompetenciasService } from './competencias.service';
import {
  COMPETENCIAS_REPOSITORY,
  InMemoryCompetenciasRepository,
} from './repositories/competencias.repository';

@Module({
  controllers: [CompetenciasController],
  providers: [
    CompetenciasService,
    {
      // No Q3, troca-se apenas esta linha (useClass) por uma implementação
      // com TypeORM/Postgres. Service e controller não mudam.
      provide: COMPETENCIAS_REPOSITORY,
      useClass: InMemoryCompetenciasRepository,
    },
  ],
})
export class CompetenciasModule {}
