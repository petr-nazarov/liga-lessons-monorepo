## Nest.js 1

-- setting up
-- bringing prettier, eslint,
-- Modules
-- DI
-- MVC

## Database

-- What is SQL database
-- What is a noSql database

## What is docker

-- What is dockers
-- Waht is docker compose
-- What are env vars and .env file

## Nest.js 2

- Deep Dive into dependency injection
  \_\_\_ End of lesson 3

### Home work:

- Read about decorattors
- Watch youtube video about nestjs and mongoose
- Watch video about docker and docker compose
- Add more fields to Post (like detailed text, image etc) (bigtext, numbers)
- Finish full CRUD for posts and export your postman files

## App requirements 1

debuger

-- DTO
-- service
-- controllers
-- Swagger
--- End of lesson 4

### Homework

- [ ] Implement DI as now in the repo
- [ ] BUT do not implement base Controller
- [ ] Add swagger for all your request
  - Example requests
  - Tags
    ##Lesson 5
    -- JWT
    -- Swager auth

### Home work

1.  Finsh "me" endpoint so it gives back a username ( from database, not from jwt)
2.  Add create post behavior : when you create a post, posts `author` field is the id of the user who is creating it.

---

-- Decorators
-- Guards (auth)
-- Middleware

### Home Work

-- Read about

- unit tests
- api tests
- e2e tests with cypress
- test mocking
- Decorators

---

### Home work

- Write test for register function (use Faker.js)
- Write test for login functions
- Write test for FORBIDDEN routes
- Write test for Allowed routes
- Write a decorator for controller methods using  zod validating a dto

- User register/login (no repository pattern)
  -- repository
  -- Validation (check zod)
  -- API tests with Jest
- Posts (no repository pattern)
  -- Permission check
  -- Admin users can edit a post of another user
  -- API tests with jest
  -- Full CRUD
- Events
  -- Guards (auth)
  -- Permission check
  -- Admin users can edit a post of another user
  -- API tests with jest
  -- Full CRUD

  ## Repository pattern

  -- migrate events, posts, users to repository pattern

  ## Authz

  -- Permission based authz
