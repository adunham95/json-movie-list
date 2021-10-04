import { GraphQLID, GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";
import { convertToID, formatDate, stringToArray } from "../../functions.js";

const Movie = new GraphQLObjectType({
    name: "Movie",
    fields: {
        id: {
            type: GraphQLID,
            description: "Movie ID",
            resolve: (source) => {
                return convertToID(source.name)
            }
        },
        name: {
            type: GraphQLString,
            description: "Movie name"
        },
        year: {
            type: GraphQLInt,
            description: "Year Released"
        },
        runtime: {
            type: GraphQLInt,
            description: "Length of the movie in minutes"
        }, 
        categories: {
            type: GraphQLNonNull(GraphQLList(GraphQLNonNull(GraphQLString))),
            description: "Categories the movie falls under"
        },
        releaseDate: {
            type: GraphQLString,
            description: "Release date of the movie",
            resolve: (source) =>{
                return formatDate(new Date(source['release-date']))
            }
        },
        //TODO Convert to director type
        director: {
            type: new GraphQLList(GraphQLString),
            description: "Director of the movie",
            resolve: (source) => {
                return stringToArray(source.director)
            }
        }, 
        writers: {
            type: GraphQLNonNull(GraphQLList(GraphQLNonNull(GraphQLString))),
            description: "Writers who write the movie",
            resolve: (source)=> {
                return source.writer
            }
        },
        actors: {
            type: GraphQLNonNull(GraphQLList(GraphQLNonNull(GraphQLString))),
            description: "Actors in the movie"
        },
        storyline: {
            type: GraphQLString,
            description: "Storyline of the movie"
        }
    }
})

export default Movie