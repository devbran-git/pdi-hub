import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import {
  COMPETENCIAS_REPOSITORY,
  ICompetenciasRepository,
} from './repositories/competencias.repository';
import { CreateCompetenciaDto } from './dto/create-competencia.dto';
import { UpdateCompetenciaDto } from './dto/update-competencia.dto';
import { Competencia } from './entities/competencia.entity';

@Injectable()
export class CompetenciasService {
  // Injeta pela interface (token), não pela classe concreta.
  // O service não sabe, e não precisa saber, se os dados vêm de
  // um array em memória ou do Postgres.
  constructor(
    @Inject(COMPETENCIAS_REPOSITORY)
    private readonly repository: ICompetenciasRepository,
  ) {}

  findAll(): Promise<Competencia[]> {
    return this.repository.findAll();
  }

  async findOne(id: string): Promise<Competencia> {
    const competencia = await this.repository.findById(id);
    if (!competencia) {
      throw new NotFoundException(`Competência ${id} não encontrada`);
    }
    return competencia;
  }

  create(data: CreateCompetenciaDto): Promise<Competencia> {
    return this.repository.create(data);
  }

  async update(id: string, data: UpdateCompetenciaDto): Promise<Competencia> {
    const atualizada = await this.repository.update(id, data);
    if (!atualizada) {
      throw new NotFoundException(`Competência ${id} não encontrada`);
    }
    return atualizada;
  }

  async remove(id: string): Promise<void> {
    const removida = await this.repository.delete(id);
    if (!removida) {
      throw new NotFoundException(`Competência ${id} não encontrada`);
    }
  }
}
