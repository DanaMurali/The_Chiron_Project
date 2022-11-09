# The Chiron Project

### Prerequisites

- Node.js
- VS Code
- MySQL

### Running Locally

To install requirements:
`pnpm install`

To start server:
`pnpm start`

The following environment variables are used by the service:

```
# Prisma
DATABASE_URL=file:./db.sqlite

# Next Auth
NEXTAUTH_SECRET=
NEXTAUTH_URL=http://localhost:4200/

# Next Auth Discord Provider
DISCORD_CLIENT_ID=
DISCORD_CLIENT_SECRET=
```

### Prisma

To format code in schema.prisma, navigate to apps/t3-client on terminal before entering in this command:

`npx prisma format`

Everytime we want to update our schema, this is going to update the schema and migrate it. This command generates the migration file and the TypeScript types.

`npx prisma migrate dev --name init`

Manually re-generate client.

`npx prisma generate`

Pushing any changes to the schema to th db without making migration. This command pushes the migration file to the database.
`npx prisma db push`

To access the Prisma studio, you need to navigate to apps/t3-client and run this command in the terminal:

`npx prisma studio`
