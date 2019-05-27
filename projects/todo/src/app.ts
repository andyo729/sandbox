import * as express from 'express'
import * as graphqlHTTP from 'express-graphql'
import { buildSchema } from 'graphql'

const app = express()
var schema = buildSchema(`
  type Query {
    hello: String
  }
`)

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue: { hello: () => 'Hello world!' },
    graphiql: true
  })
)
app.use('/healthcheck', (_, res) => res.send({ status: 'up' }))
app.listen(80)
