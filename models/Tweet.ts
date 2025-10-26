import mongoose, { Schema, model, models } from "mongoose";

const tweetSchema = new mongoose.Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  content: {
    type: String,
    maxlength: 280,
    required: function() {
      return !this.media || this.media.length === 0;
    }
  },
  media: [{
    url: {
      type: String,
      required: true
    },
    publicId: String,
    mediaType: {
      type: String,
      enum: ['image', 'video', 'gif'],
      required: true
    },
    thumbnail: String,
    duration: Number,
    width: Number,
    height: Number,
    size: Number,
    format: String,
    altText: {
      type: String,
      maxlength: 420,
      default: ''
    }
  }],
  hashtags: [String],
  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  likesCount: {
    type: Number,
    default: 0
  },
  retweets: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  retweetsCount: {
    type: Number,
    default: 0
  },
  replies: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tweet'
  }],
  repliesCount: {
    type: Number,
    default: 0
  },
  isRetweet: {
    type: Boolean,
    default: false
  },
  originalTweet: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tweet'
  },
  isReply: {
    type: Boolean,
    default: false
  },
  parentTweet: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tweet'
  },
  isSensitive: {
    type: Boolean,
    default: false
  },
  mediaOnly: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Tweet = models.Tweet || model("Tweet", tweetSchema);
export default Tweet;
