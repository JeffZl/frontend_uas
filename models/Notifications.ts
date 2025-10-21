import mongoose, { Schema, model, models } from "mongoose";

const notificationSchema = new Schema(
    {
        recipient: { type: Schema.Types.ObjectId, ref: "User", required: true },
        sender: { type: Schema.Types.ObjectId, ref: "User" },
        type: {
        type: String,
        enum: ["like", "follow", "reply", "mention", "retweet"],
        required: true,
        },
        tweet: { type: Schema.Types.ObjectId, ref: "Tweet" },
        read: { type: Boolean, default: false },
    },
    { timestamps: true }
);

const Notification = models.Notification || model("Notification", notificationSchema);
export default Notification;
