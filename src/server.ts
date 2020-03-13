import express from 'express';
import compression from 'compression';
import cors from 'cors';
import { IResolvers, makeExecutableSchema } from 'graphql-tools';
import { GraphQLSchema } from 'graphql';
import graphqlHTTP from 'express-graphql';

const port = process.env.PORT || 3000
const app = express()

app.use('*', cors())
app.use(compression())

const typeDefs = `
  type Query {
    hola: String!
    holaConNombre(nombre: String!): String!
  }
`

const resolvers: IResolvers = {
  Query: {
    hola(): String {
      return "hola mundo"
    },
    holaConNombre(__: void, { nombre }): String {
      return `hola mundo ${nombre}`
    }
  }
}

const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs,
  resolvers
})

app.use('/', graphqlHTTP({
  schema,
  graphiql: true
}))

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}/graphql`)
})