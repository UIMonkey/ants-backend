import { Field, Int, ObjectType } from "type-graphql";

// @ObjectType()
// export default class Ant {
//   @Field(type => Int)
//   name: string;

//   @Field()
//   colony: string;

//   constructor() {
//       this.name = '';
//       this.colony = 'Red';
//   }

// }

export const typeDefs = `
  type Query {
    ants: [Ant]
    antById(id: Int): Ant
  }
  type Ant {
    id: Int!
    name: String!
    health: Float
    heading: Float
    speed: Float
    colony: String
    location: Position
    destination: Position
  }
  type Position {
    latitude: Float
    longitude: Float
  }
`;