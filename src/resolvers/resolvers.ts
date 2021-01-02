import { IResolvers } from "graphql-tools";
import { IAnt } from "../ant";
import { ants } from "../model";

// The resolvers
export const resolvers: IResolvers = {
  Query: {
    ants: () => {
      return ants;
    },
    antById: (parent, {id}, {dataSources}, info) => {
      return ants.find((ant: IAnt) => id === ant.id);
    }
  },
};