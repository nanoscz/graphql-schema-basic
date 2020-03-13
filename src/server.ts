import express from 'express';
import compression from 'compression';
import cors from 'cors';
import graphqlHTTP from 'express-graphql';

import schema from './schema'

const port = process.env.PORT || 3000
const app = express()

app.use('*', cors())
app.use(compression())

app.use('/', graphqlHTTP({
  schema,
  graphiql: true
}))

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}/graphql`)
})