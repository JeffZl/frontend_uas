import { Schema, model, models } from "mongoose";

const tweetSchema = new Schema(
    {
        author: { type: Schema.Types.ObjectId, ref: "User", required: true },
        content: { type: String, required: true, maxlength: 280 },
        image: { type: String },
        likes: [{ type: Schema.Types.ObjectId, ref: "User" }],
        retweets: [{ type: Schema.Types.ObjectId, ref: "User" }],
        replies: [
        {
            user: { type: Schema.Types.ObjectId, ref: "User" },
            content: String,
            createdAt: { type: Date, default: Date.now },
        },
        ],
    },
    { timestamps: true }
);

const Tweet = models.Tweet || model("Tweet", tweetSchema);
export default Tweet;
