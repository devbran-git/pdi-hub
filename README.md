# PDI Hub

Aplicação Fullstack para gestão de desenvolvimento profissional — Capstone principal do meu Plano de Desenvolvimento Individual (PDI).

**Objetivo:** evoluir de Desenvolvedor Front-end Júnior para Desenvolvedor Fullstack Pleno até dezembro de 2026.

---

## Sobre o projeto

O PDI Hub é a aplicação que registra e organiza minha própria jornada de evolução profissional — construída com a stack que estou dominando ao longo do PDI.

Funcionalidades planejadas:

- Autenticação e autorização
- Gestão de competências
- Gestão de metas
- Registro de evidências
- Timeline de evolução profissional
- Geração de dossiê profissional

## Stack

| Camada              | Tecnologia                         |
| ------------------- | ---------------------------------- |
| Frontend            | React + TypeScript + Redux Toolkit |
| Backend             | NestJS + TypeScript                |
| Banco de Dados      | PostgreSQL                         |
| Infraestrutura      | Docker + Docker Compose            |
| Testes              | Jest + React Testing Library       |
| Documentação de API | Swagger/OpenAPI                    |

## Estrutura do repositório

```
pdi-hub/
├── apps/
│   ├── backend/        # API NestJS
│   └── frontend/       # SPA React
├── docs/
│   ├── cronograma/     # Acompanhamento Q1-Q8
│   ├── evidencias/     # Artefatos de entrega e decisões técnicas
│   └── aprendizados/   # Registro de estudo (DevLog)
├── docker-compose.yml
├── .github/workflows/  # CI
├── .gitignore
├── package.json        # workspaces (npm)
└── README.md
```

## Cronograma

| Ciclo | Foco                                     |
| ----- | ---------------------------------------- |
| Q1    | Fundação do Projeto + Clean Code + SOLID |
| Q2    | TypeScript Avançado + NestJS             |
| Q3    | Módulo de Competências + PostgreSQL      |
| Q4    | React + Redux Toolkit                    |
| Q5    | Módulo de Metas + JWT + Swagger          |
| Q6    | Testes Automatizados + Qualidade         |
| Q7    | Módulo de Evidências + Timeline          |
| Q8    | Fechamento, documentação e publicação    |

Progresso detalhado em [`docs/cronograma`](./docs/cronograma).

## Como rodar (em construção)

O ambiente de desenvolvimento ainda está sendo estruturado. Conforme os apps forem sendo criados, esta seção será atualizada com:

```bash
docker-compose up -d   # sobe o PostgreSQL
npm install             # instala dependências dos workspaces
npm run dev --workspace=apps/backend
npm run dev --workspace=apps/frontend
```

## Metodologia

Este projeto é desenvolvido com apoio de IA em **Nível 4**: eu projeto as soluções, a IA ajuda na implementação, e toda decisão técnica é revisada e justificada por mim antes de entrar no repositório. Código gerado não substitui entendimento — é acelerador de aprendizado.

## Status

🚧 Em desenvolvimento — Q1 (Fundação do Projeto)
