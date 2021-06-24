import { gql } from "apollo-server";

export const typeDefs = gql`
    type Friend {
        _id: ID!,
        firstName: String!,
        lastName: String!,
        age: Int!,
        info: String!
    },

    input FriendInput {
        firstName: String!,
        lastName: String!,
        age: Int!,
        info: String!
    },

    type Query {
        friend(_id: ID!): Friend,
        friends: [Friend]
    },

    type Mutation {
        createFriend(input: FriendInput): Friend,
        updateFriend(_id: ID!, input: FriendInput): Friend,
        deleteFriend(_id: ID!): Friend
    }
`;




