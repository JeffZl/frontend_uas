import mongoose, { Schema, model, models } from "mongoose";

const messageSchema = new Schema(
    {
        conversation: { type: Schema.Types.ObjectId, ref: "Conversation" },
        sender: { type: Schema.Types.ObjectId, ref: "User", required: true },
        text: { type: String, required: true },
        seenBy: [{ type: Schema.Types.ObjectId, ref: "User" }],
    },
    { timestamps: true }
);

const Message = models.Message || model("Message", messageSchema);
export default Message;
