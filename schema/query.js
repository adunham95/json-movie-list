import { GraphQLList, GraphQLObjectType, GraphQLString} from 'graphql';
import { getAllActors, getSingleActor } from '../service/actor.js';
import { getAllDirectors, getSingleDirector } from '../service/director.js';
import Actor from './types/actor.js';
import Director from './types/director.js';

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
      },
      director: {
        type: Director,
        args: {
          directorName: {type: GraphQLString},
        },
          resolve: async(root, args, context) => {
            const {directorName} = args;
            const res = await getSingleDirector(directorName);
            return res;
          }
        
      },
      directors: {
        type: new GraphQLList(Director),
        resolve: async(root, args, context) => {
          const res = await getAllDirectors();
          return res;
        }
      }
  },
});

export default query;