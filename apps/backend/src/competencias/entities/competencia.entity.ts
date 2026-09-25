export enum CategoriaCompetencia {
  TECNICA = 'TECNICA',
  COMPORTAMENTAL = 'COMPORTAMENTAL',
}

export class Competencia {
  id: string;
  nome: string;
  categoria: CategoriaCompetencia;
  nivelAtual: number; // escala 1 a 5
  nivelDesejado: number; // escala 1 a 5
  descricao?: string;
  criadoEm: Date;
}
