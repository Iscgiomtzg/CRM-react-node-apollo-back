import { importSchema } from 'graphql-import';

const typeDefs = `
    type Cliente {
        id: ID,
        nombre: String
        apellido: String
        empresa: String
        emails: [Email]
        edad: Int
        tipo: TipoCliente
        pedidos: [Pedido]
    }
    type Email{
        email: String
    }
    type Pedido {
        producto: String
        precio: Int
    }
    type Producto{
        id: ID
        nombre: String
        precio: String
        stock: String
    }
    enum TipoCliente {
        BASICO
        PREMIUM
    }
    type Query {
        getClientes(limite: Int, offset: Int): [Cliente]
        getCliente(id: ID): Cliente
        totalClientes: String
        obtenerProductos(limite: Int, offset: Int): [Producto]
        obtenerProducto(id: ID!): Producto
    }
    input PedidoInput{
        producto: String!
        precio: Int!
    }
    input EmailInput{
        email: String
    }
    input ClienteInput {
        id: ID
        nombre: String!
        apellido: String!
        empresa: String!
        emails: [EmailInput]
        edad: Int!
        tipo: TipoCliente!
        pedidos: [PedidoInput]
    }
    input ProductoInput{
        id: ID
        nombre: String!
        precio: Float!
        stock: Int!
    }
    type Mutation{
    """ Te permite crear nuevos clientes """
        crearCliente(input: ClienteInput): Cliente
        actualizarCliente(input: ClienteInput): Cliente
        eliminarCliente(id: ID!): String
        nuevoProducto(input: ProductoInput): Producto
        actualizarProducto(input: ProductoInput): Producto
        eliminarProducto(id: ID!): String
    }
    `;
// const schema = makeExecutableSchema({typeDefs, resolvers});

export  {typeDefs}  ;