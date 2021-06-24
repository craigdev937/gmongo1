import mongoose from "mongoose";

const FriendSchema = new mongoose.Schema({
    firstName: {
        type: String, 
        required: [true, "First name is required"]
    },
    lastName: {
        type: String, 
        required: [true, "Last name is required"]
    },
    age: {
        type: Number, 
        required: [true, "Age is required"]
    },
    info: { type: String }
});

export const Friend = mongoose.model("Friend", FriendSchema);






