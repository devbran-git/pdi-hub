import { PartialType } from '@nestjs/mapped-types';
import { CreateCompetenciaDto } from './create-competencia.dto';

/**
 * PartialType usa o utility type Partial<T> internamente: torna todos
 * os campos do CreateCompetenciaDto opcionais, sem precisar reescrevê-los.
 * É o padrão idiomático do Nest para DTOs de update.
 */
export class UpdateCompetenciaDto extends PartialType(CreateCompetenciaDto) {}
