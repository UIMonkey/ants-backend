import { IResolvers } from "graphql-tools";
import { IAnt } from "../ant";
import { ants } from "../model";

// The resolvers
export const resolvers: IResolvers = {
  Query: {
    ants: () => {
      console.log(ants);
      return ants;
    },
    antById: (parent, {id}, {dataSources}, info) => {
      console.log(id)
      console.log(ants.filter((ant: IAnt) => id === ant.id))
      return ants.find((ant: IAnt) => id === ant.id);
    }
  },
};