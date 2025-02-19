import { GraphQLID, GraphQLList, GraphQLObjectType, GraphQLString } from "graphql";
import { convertToID, formatDate } from "../../functions.js";
import { getMovieByActor } from "../../service/movie.js";
import Movie from "./movie.js"

const Actor = new GraphQLObjectType({
    name: "Actor",
    fields: {
        id: {
            type: GraphQLID,
            description: 'Actor ID',
            resolve: (source) => {
                return convertToID(source.name)
            }
        },
        birthName: {
            type: GraphQLString,
            description: "Actor Birthname",
            resolve: (source) => {
                return source.birthname
            }
        },
      name: {
        type: GraphQLString,
        description: "Actor Name"
      },
      birthDay: {
          type: GraphQLString,
            description: "Actor Birthday",
            resolve: (source) => {
                return formatDate(new Date(source.birthdate))
            }
      },
      birthPlace: {
          type: GraphQLString,
            description: "Actor Birthplace",
            resolve: (source) => {
                return source.birthplace
            }
      },
      movies: {
          type: new GraphQLList(Movie),
          description: "Movies the actors are in",
          resolve: (source) => {
            return getMovieByActor(source.name)
          }
      }
    }
});


export default Actor