<p align="center">
<img src="./apps/t3-client/public/assets/chiron-crop.png" width="39" height="50" />
</p>
<h1 align="center">
The Chiron Project
</h1>

### Summary

The Chiron Project is a platform designed to help organisations build mentorship networks, thus enabling employees to exchange knowledge, advice, and support to accelerate both personal and professional capabilities.

Often, mentorships within companies occur unintentionally without a formal program. Our platform aims to bridge this gap. This is essential; in the modern workplace, mentorships across all disciplines play an integral role in an employee’s development, even more so now with the current financial crisis and hybrid working model.

Our user friendly & accessible prototype ensures that a user can search for potential mentors, view their profile page, send requests, and even become a mentor themself, passing their own unique experience forwards.

![alt text](./assets/microarchitecture.png)

### Local Development

#### Prerequisites

- Node.js `>= v16.13.2`
- Pnpm `>= v7.11.0`
- MySQL

####  Running Locally

To install dependencies:

```sh
pnpm install
```

Create a `.env` file using the `example.env`

- Contact a member of the development team for the necessary environment keys
- Use the example database URL for local development


| Config                 | Description                         |
| ---------------------- | ----------------------------------- |
| DATABASE_URL           | Example inside `example.md`         |
| NEXTAUTH_SECRET        | Encrypt NextAuth.js JWT             |
| NEXTAUTH_URL           | http://localhost:4200/              |
| AZURE_AD_CLIENT_ID     | The client ID of App Registration.  |
| AZURE_AD_CLIENT_SECRET | Client secret for app registration. |
| AZURE_AD_TENANT_ID     | Azure Active Directory tenant ID.   |

To start app:

```sh
pnpm nx serve chiron
# or
pnpm start # shortcut for above command
```

This uses the Azure AD provider for Next-Auth

- Contact a member of the dev team to generate a test user to log into the app

### Prisma

To use Prisma commands, first navigate into `apps/t3-client`

To format code in `schema.prisma`:

```sh
npx prisma format
```

To access Prisma Studio:

```sh
npx prisma studio
```

When you make a change to the Prisma schema, there are multiple commands available:

```sh
# (Re-)Generate the Client to update the generated types
npx prisma generate
```

```sh
# Push schema changes to the db without making a migration
# Used for prototyping db schema changes
npx prisma db push
```

```sh
# Make a db migration
# This 'replays' existing migrations and then adds a new one
# This will also seed the database unless '--skip-seed' is passed
npx prisma migrate dev [--name] (--skip-seed)
```

There are multiple commands to initialize your db:

```sh
# Reset db and apply migrations
npx prisma migrate reset (--skip-seed)
```

```sh
# Apply migrations to development db
npx prisma migrate dev (--skip-seed)
```

```sh
# Manually seed db
npx prisma db seed
```

```sh
# Apply migrations to a staging or prod environment
npx prisma migrate deploy
```

To reset database and to seed it with data in seed.tx file:

`npx prisma migrate reset`

- The seed script can be found in `/prisma/seed.ts`
