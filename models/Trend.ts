import mongoose, { Schema, model, models } from "mongoose";

const trendSchema = new Schema(
    {
        topic: { type: String, required: true },
        tweetCount: { type: Number, default: 0 },
        createdAt: { type: Date, default: Date.now },
    },
    { timestamps: true }
);

const Trend = models.Trend || model("Trend", trendSchema);
export default Trend;
