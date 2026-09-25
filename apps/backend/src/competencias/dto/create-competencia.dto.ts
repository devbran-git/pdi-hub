import {
  CategoriaCompetencia,
  Competencia,
} from '../entities/competencia.entity';

/**
 * Omit<Competencia, 'id' | 'criadoEm'> remove os campos que o backend
 * controla (id gerado e data de criação). O `implements` garante que a
 * classe segue exatamente esse shape derivado — se a entidade mudar,
 * o TypeScript acusa aqui.
 */
export class CreateCompetenciaDto implements Omit<
  Competencia,
  'id' | 'criadoEm'
> {
  nome: string;
  categoria: CategoriaCompetencia;
  nivelAtual: number;
  nivelDesejado: number;
  descricao?: string;
}
