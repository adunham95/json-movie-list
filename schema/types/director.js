import { GraphQLID, GraphQLList, GraphQLObjectType, GraphQLString } from "graphql";
import { convertToID, formatDate } from "../../functions.js";
import { getMovieByDirector } from "../../service/movie.js";
import Movie from "./movie.js"

const Director = new GraphQLObjectType({
    name: "Director",
    fields: {
        id: {
            type: GraphQLID,
            description: 'Director ID',
            resolve: (source) => {
                console.log(source)
                return convertToID(source.name)
            }
        },
        birthName: {
            type: GraphQLString,
            description: "Director Birthname",
            resolve: (source) => {
                return source.birthname
            }
        },
      name: {
        type: GraphQLString,
        description: "Director Name"
      },
      birthDay: {
          type: GraphQLString,
            description: "Director Birthday",
            resolve: (source) => {
                return formatDate(new Date(source.birthdate))
            }
      },
      birthPlace: {
          type: GraphQLString,
            description: "Director Birthplace",
            resolve: (source) => {
                return source.birthplace
            }
      },
      movies: {
          type: new GraphQLList(Movie),
          description: "Movies the have directed",
          resolve: (source) => {
            return getMovieByDirector(source.name)
          }
      }
    }
});


export default Director