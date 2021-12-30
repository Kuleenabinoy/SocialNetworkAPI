const { Schema, model } = require("mongoose");
const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
            match: [
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                "Please add a valid email address.",
            ],
            required: [true, "Please enter Email Address"],
            unique: true,
            lowercase: true,
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: "Thought",
            },
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: "User",
            },
        ],
    },
    //tells mongoose to use these funtions
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        //id is set to false because Mongoose returns a virtuals not needing an id
        id: false,
    }
);
userSchema.virtual("friendCount").get(function () {
    return this.friends.length;
});
const User = model("User", userSchema);
module.exports = User;
