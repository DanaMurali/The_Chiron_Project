import { ApolloServer } from 'apollo-server';
import 'dotenv/config';

import { resolvers } from './resolvers/index';
import { typeDefs } from './schema';

// const MONGO_DB_URL = process.env.MONGO_DB_URL;

const PORT = process.env.PORT || 4000;

const bootstrap = async () => {
  try {
    // await connect(MONGO_DB_URL)
    // console.log("Connected to Database");

    const server = new ApolloServer({
      typeDefs,
      resolvers,
      csrfPrevention: true,
      cache: 'bounded',
    });

    const { url } = await server.listen(PORT);
    console.log(`🚀 Server ready at ${url}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

bootstrap();
