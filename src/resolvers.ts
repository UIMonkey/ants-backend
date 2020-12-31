import { ants } from "./model";

// The resolvers
export const resolvers = {
    Query: { ants: () => ants },
  };