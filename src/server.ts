import express from 'express';
import compression from 'compression';
import cors from 'cors';
const port = process.env.PORT || 3000

import { runServer } from "./utils"
import { createServer } from 'http';
import { ApolloServer } from "apollo-server-express"

const app = express()
app.use('*', cors())
app.use(compression())

import schema from './schema'
const server = new ApolloServer({
  schema,
  introspection: true
})

server.applyMiddleware({ app });
const httpServer =  createServer(app)
httpServer.listen(port, runServer)