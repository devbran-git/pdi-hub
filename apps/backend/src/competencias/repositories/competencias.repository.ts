import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { IRepository } from '../../common/interfaces/repository.interface';
import { Competencia } from '../entities/competencia.entity';
import { CreateCompetenciaDto } from '../dto/create-competencia.dto';
import { UpdateCompetenciaDto } from '../dto/update-competencia.dto';

// Token de injeção: permite trocar a implementação (ex: Postgres no Q3)
// sem alterar service/controller.
export const COMPETENCIAS_REPOSITORY = 'COMPETENCIAS_REPOSITORY';

export type ICompetenciasRepository = IRepository<
  Competencia,
  CreateCompetenciaDto,
  UpdateCompetenciaDto
>;

@Injectable()
export class InMemoryCompetenciasRepository
  implements ICompetenciasRepository
{
  private competencias: Competencia[] = [];

  async findAll(): Promise<Competencia[]> {
    return this.competencias;
  }

  async findById(id: string): Promise<Competencia | null> {
    return this.competencias.find((c) => c.id === id) ?? null;
  }

  async create(data: CreateCompetenciaDto): Promise<Competencia> {
    const nova: Competencia = {
      id: randomUUID(),
      criadoEm: new Date(),
      ...data,
    };
    this.competencias.push(nova);
    return nova;
  }

  async update(
    id: string,
    data: UpdateCompetenciaDto,
  ): Promise<Competencia | null> {
    const index = this.competencias.findIndex((c) => c.id === id);
    if (index === -1) return null;

    this.competencias[index] = { ...this.competencias[index], ...data };
    return this.competencias[index];
  }

  async delete(id: string): Promise<boolean> {
    const tamanhoAntes = this.competencias.length;
    this.competencias = this.competencias.filter((c) => c.id !== id);
    return this.competencias.length < tamanhoAntes;
  }
}
