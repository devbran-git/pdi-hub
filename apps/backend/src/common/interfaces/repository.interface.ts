/**
 * Contrato genérico de repositório.
 *
 * T          -> entidade do domínio
 * CreateDto  -> shape de dados para criação
 * UpdateDto  -> shape de dados para atualização
 *
 * Qualquer módulo (Competências, Metas, Evidências) pode implementar
 * esta interface, trocando apenas a implementação concreta (em memória,
 * TypeORM/Postgres, etc.) sem alterar service nem controller.
 * Isso é Dependency Inversion Principle (SOLID) na prática.
 */
export interface IRepository<T, CreateDto, UpdateDto> {
  findAll(): Promise<T[]>;
  findById(id: string): Promise<T | null>;
  create(data: CreateDto): Promise<T>;
  update(id: string, data: UpdateDto): Promise<T | null>;
  delete(id: string): Promise<boolean>;
}
