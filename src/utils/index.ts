const port = process.env.PORT || 3000

function runServer() {
  console.log(`Listening on http://localhost:${port}/graphql`)
}

export {
  runServer
}