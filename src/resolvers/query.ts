import { IResolvers } from "graphql-tools"

const query: IResolvers = {
  Query: {
    hola(): String {
      return "hola mundoooooooo"
    },
    holaConNombre(__: void, { nombre }): String {
      return `hola mundo ${nombre}`
    }
  }
}
export default query;