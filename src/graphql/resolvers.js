import { Friend } from "../models/Friend.js";

export const resolvers = {
    Query: {
        friend: async (obj, {_id}) => await Friend.findById(_id),
        friends: async () => await Friend.find()
    },
    Mutation: {
        createFriend: async (obj, {input}) => {
            return await Friend.create(input);
        },
        updateFriend: async (obj, {_id, input}) => {
            return await Friend.findByIdAndUpdate({_id}, input);
        },
        deleteFriend: async (obj, {_id}) => {
            return await Friend.findByIdAndDelete({_id});
        },
    }
};





