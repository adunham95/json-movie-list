import { GraphQLID, GraphQLObjectType, GraphQLString } from "graphql";
import { convertToID, formatDate } from "../../functions.js";

const Director = new GraphQLObjectType({
    name: "Director",
    fields: {
        id: {
            type: GraphQLID,
            description: 'Director ID',
            resolve: (source) => {
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
      }
    }
});


export default Director