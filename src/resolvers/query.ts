import { IResolvers } from "graphql-tools"

const query: IResolvers = {
  Query: {
    hola(): String {
      return "hello world"
    },
    holaConNombre(__: void, { nombre }): String {
      return `hello ${nombre}`
    }
  }
}
export default query;