import { buildSchema } from "type-graphql";
import { GraphQLSchema } from "graphql";

import { ProductResolver } from "./graphql/resolvers/ProductResolver";

export async function generateSchema(): Promise<GraphQLSchema> {
  try {
    const schema = await buildSchema({
      resolvers: [
        ProductResolver
      ],
      validate: false,
      
    });

    return schema;
  } catch (e) {
    console.error(e);
    throw e;
  }
}