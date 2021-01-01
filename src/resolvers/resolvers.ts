import { ants } from "../model";

// The resolvers
export const resolvers = {
  Query: {
    ants: () => {
      console.log(ants);
      return ants;
    }
  },
};