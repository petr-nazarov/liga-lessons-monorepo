## Module 0 - Pre rquirements

- JS, TS
  - https://www.youtube.com/watch?v=2pZmKW9-I_k&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI
- OOP
- Protocols
- Nest.js Basics
  - https://www.youtube.com/playlist?list=PL4cUxeGkcC9g8YFseGdkyj9RH9kVs_cMr
- Git, Github
- NPM

## Module 1 - Setting up

### Theory Module 1

- VDS

  - loging in to VDS
  - creating ssh keys
  - writing ssh keys to VDS

- Vscode

  - Installing vscode
  - Connecting vscode to remote by ssh

- NVM/FNM

  - Installing fnm
  - About .nvmrc

- Typescript

  - tsconfig.json

- Symantic Versioning

- EsLint

  - eslintrc.js
  - lint on save
  - prettier

- Husky

  - lint on commit
  - lint messages

### Practice Module 1

- A working ts express weather application on express
  - inside folder `apps/weather`
- Development env on a vds with Vscode linked to it
- Linting and formating running on save and on commit

## Module 2 - Basic BE

### Theory Module 2

- Enviroments and .env files
- Docker and Docker Compouse
- Swagger
- Dependency Injection
- Repository pattern
- MVC Pattern
- Decorators
- Authentication
  - JWT tokens
  - seesion authorization
  - cookies authorization
  - Guards, Middleware
- Authorization
  - Role Base Authz
  - Permission Base Authz
- Validation
  - Zod
- Tests
  - Unit and api tests
  - TDD
  - mocking
  - Faker

### Practice Module 2

- Note : Developing in `apps/server`
- Docker compose mongodb local deployment
- Deploying Swagger
- Writing repository pattern with DI
- Developing Posts recource
- Developing auth flow
  - login / register
  - protecting posts recource (Guards and decorators)
- Developing Authz flow
  - Permisssion And Role Base Auth
  - Manager can manage all posts , user can only manage their posts
- Writing tests for implemented behaviour
  - Mocking one function
- Validate data on Controllers using Zod

## Module 3 - Monorepo, Env Managment, Basic deployment

### Theory Module 3

- Turborepo
  - caching
  - versioning
  - linking packages
- Dependencies and dev dependencies
- Doppler
- Mongodb Atlas
- Docker:
  - Dockerizing
  - envs
  - stages
  - registry
- Github Actions
  - ACT (run actions locally)
  - Caching

### Practice Module 3

- Make current repo a monorepo
- Extract shared types and DTOs into a `packages/types` project
- Extract `tsconfig.json`, `eslintrc.js` to `packages/config`
- Apply Doppler to use for dev, prod and test envs
- Make a project on atlas and connect to prod env
- CI flow:
  - checkout
  - lint
  - test
  - cache
  - gh actions
- CD flow:
  - version bump:
    - conventional commits 
      - https://www.conventionalcommits.org/en/v1.0.0/
    - changesets 
        https://github.com/changesets/changesets
  - dockerize
  - publish on docker registry
  - deploy image to server

## Module 4 - Basic FE and its deployment

### Theory Module 4

- Note: developing in `apps/web`
- Front end frameworks and metaframeworks
- DI Pattern for services
- JSON generated forms
- E2E tests with cyprus
- Local storage and Index DB
- Light House, FE performance
  - https://www.youtube.com/watch?v=0fONene3OIA
- Packaging as a mobile app

### Practice Module 4

- Implement DI for FE services
- Create a JSON form generation mechanizm
- Create a JSON generated CRUD for posts, auth
- CI/CD for FE
- CI E2E test

## Module 5 - Life after birth

### Module 5 Theory

- Logging
- Backups
- Reporting
- Publishing documentation: TSDoc
- Metrics
- IAC
  - Terraform
  - Pulumi
- Red/Blue deployment
- Parallel CI/CD
- K8s and highload scaling
- Multisite
