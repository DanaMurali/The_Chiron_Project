import { ApolloServer } from 'apollo-server';

import { resolvers } from './resolvers/index';
import { typeDefs } from './schema';

// const MONGO_DB_URL = 'mongodb://localhost/{databaseName}';

async function bootstrap() {
  try {
    // connect to MongoDb database
    // await connect(MONGO_DB_URL); // ? potentially use datasources
    // console.log("Connected to Database");

    const server = new ApolloServer({
      typeDefs,
      resolvers,
      csrfPrevention: true,
      cache: 'bounded',
    });

    const { url } = await server.listen();
    console.log(`🚀 Server ready at ${url}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

bootstrap();
