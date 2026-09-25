# Q2 — Fundação do Backend + Módulo de Competências

**Status:** entrega concluída e testada localmente
**Data:** 2026-09-25

## Escopo da entrega

> Construir a fundação do backend e estruturar o domínio; Configurar NestJS;
> Criar módulos, controllers e services; Estruturar domínio; Aplicar generics
> e utility types.

## O que foi feito

| Item | Entregável |
|---|---|
| Fundação do backend | Monorepo com `npm workspaces` (`apps/backend`, `apps/frontend`) |
| Configuração do NestJS | Scaffold via `@nestjs/cli@10` dentro de `apps/backend` |
| Estruturar domínio | Entidade `Competencia` (`nome`, `categoria`, `nivelAtual`, `nivelDesejado`, `descricao`) |
| Módulos, controllers e services | `CompetenciasModule`, `CompetenciasController` (CRUD REST), `CompetenciasService` |
| Generics e utility types | Interface genérica `IRepository<T, CreateDto, UpdateDto>`; `Omit` no DTO de criação; `Partial` (via `PartialType`) no DTO de atualização |

## Decisão de arquitetura

Persistência via **repositório em memória** (`InMemoryCompetenciasRepository`),
implementando a interface genérica `IRepository`, injetado por token
(`COMPETENCIAS_REPOSITORY`) em vez de classe concreta.

**Por quê:** o PostgreSQL só entra no cronograma no Q3. Usando Dependency
Inversion (interface + injeção por token), o service e o controller não
dependem da implementação concreta. Quando o Postgres/TypeORM entrar, troca-se
apenas o `provide`/`useClass` no `CompetenciasModule` — zero mudança em
domínio, service ou controller.

## Testado

- `POST /competencias` — cria uma competência
- `GET /competencias` — lista (retorna vazio ao reiniciar o servidor, já que
  é em memória — comportamento esperado)

## Problemas encontrados e resolvidos

- **`ERR_REQUIRE_CYCLE_MODULE`** ao rodar `nest new`: incompatibilidade entre
  Node 22.14 e a versão mais recente do `@nestjs/cli` (exige Node ≥22.22.3).
  Resolvido atualizando o Node via nvm-windows.
- Arquivos gerados foram colocados numa subpasta extra (`backend-src`) por
  engano ao copiar para `apps/backend/src` — corrigido movendo o conteúdo
  para o lugar certo.

## Pendências para retomar depois

- Confirmar se os campos de `Competencia` batem 100% com o uso real
  pretendido (foi assumido com base no PDI, nunca formalmente validado)
- Q3: trocar `InMemoryCompetenciasRepository` por implementação com
  PostgreSQL/TypeORM
- Adicionar validação nos DTOs (`class-validator`) — ainda não configurado
