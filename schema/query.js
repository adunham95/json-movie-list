import { GraphQLList, GraphQLObjectType, GraphQLString} from 'graphql';
import { getAllActors, getSingleActor } from '../service/actor.js';
import Actor from './types/actor.js';

const query = new GraphQLObjectType({
  name: 'Query',
  fields: {
      actor: {
          type: Actor,
          args: {
              actorName: {type: GraphQLString}
          },
          resolve: async (root, args, context) => {
              const {actorName} = args;
              const response = await getSingleActor(actorName);
              return response;
          }
      },
      actors: {
        type: new GraphQLList(Actor),
        resolve: async(root, args, context) => {
          const response = await getAllActors();
          return response;
        }
      }
  },
});

export default query;