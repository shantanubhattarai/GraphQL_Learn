import { addPet, deletePet, editPet } from "./mutations/pets.mutations.js";
import { getPet, listPets } from "./queries/pets.queries.js";

export const typeDefs = `#graphql
  #Queryable fields, types of data that can be queried
  type Pet {
    id: ID!
    name: String!
    type: String!
    age: Int!
    breed: String!
  }

  #input objects for mutations
  input PetToEdit {
    id: ID!
    name: String!
    type: String!
    age: Int!
    breed: String!
  }

  input PetToAdd {
    name: String!
    type: String!
    age: Int!
    breed: String!
  }

  # lists all available queries that clients can execute, along with their return type
  type Query {
    pets: [Pet],
    pet(id: ID!): Pet
  }

  type Mutation {
    addPet(petToAdd: PetToAdd!): Pet,
    editPet(petToEdit: PetToEdit!): Pet,
    deletePet(id: ID!): [Pet],
  }
`;

export const resolvers = {
  Query: {
    pets: () => listPets(),
    pet: (_, { id }) => getPet(id),
  },
  Mutation: {
    addPet: (_, { petToAdd }) => addPet(petToAdd),
    editPet: (_, { petToEdit }) => editPet(petToEdit),
    deletePet: (_, { id }) => deletePet(id),
  },
};
