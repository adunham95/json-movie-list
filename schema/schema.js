import { GraphQLObjectType, GraphQLID, GraphQLNonNull, GraphQLBoolean, GraphQLString, GraphQLList, GraphQLInt, GraphQLSchema } from 'graphql';
import { getSingleActor } from '../service/actor.js';
import query from "./query.js"

export default new GraphQLSchema({
  query,
});