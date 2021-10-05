import express  from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './schema/schema.js';

// Create a server:
const app = express();

// Use those to handle incoming requests:
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}));

// Start the server:
app.listen(8080, () => console.log("Server started on port 8080"));