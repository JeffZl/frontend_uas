"use client";

import Image from "next/image";
import { useState } from "react";
import { FaRegComment, FaRetweet, FaHeart, FaRegHeart } from "react-icons/fa";
import { FiUpload } from "react-icons/fi";

export interface TweetMedia {
  url: string;
  mediaType: "image" | "video";
  width?: number;
  height?: number;
}

export interface TweetProps {
  _id?: string;
  author: {
    name: string;
    handle: string;
    avatar: string;
  };
  content: string;
  media?: TweetMedia[];
  likes?: number;
  replies?: number;
  createdAt?: string;
}

export default function TweetItem({
  author,
  content,
  media = [],
  likes = 0,
  replies = 0,
  createdAt,
}: TweetProps) {
  const [liked, setLiked] = useState(false);
  const toggleLike = () => setLiked((prev) => !prev);

  return (
    <article className="flex gap-3 border-b border-[#2f3336] p-4 hover:bg-[#0f0f0f] transition">
      {/* Avatar */}
      <div className="flex-shrink-0">
        <Image
          src={author.avatar}
          alt={author.name}
          width={48}
          height={48}
          className="rounded-full"
        />
      </div>

      {/* Main tweet content */}
      <div className="flex-1">
        <div className="flex justify-between">
          <div>
            <span className="font-bold">{author.name}</span>{" "}
            <span className="text-gray-500 text-sm">{author.handle}</span>
            {createdAt && (
              <span className="text-gray-600 text-sm ml-1">
                • {new Date(createdAt).toLocaleDateString()}
              </span>
            )}
          </div>
        </div>

        <p className="mt-1 text-[15px]">{content}</p>

        {/* 🖼️ Media section */}
        {media.length > 0 && (
          <div
            className={`mt-3 rounded-2xl overflow-hidden border border-[#2f3336] ${
              media.length > 1 ? "grid grid-cols-2 gap-[2px]" : ""
            }`}
          >
            {media.map((m, index) =>
              m.mediaType === "image" ? (
                <Image
                  key={index}
                  src={m.url}
                  alt={m.altText || "tweet media"}
                  width={m.width || 600}
                  height={m.height || 400}
                  className="object-cover w-full h-auto"
                />
              ) : (
                <video
                  key={index}
                  controls
                  className="w-full rounded-2xl"
                  preload="metadata"
                >
                  <source src={m.url} type={`video/${m.format || "mp4"}`} />
                  Your browser does not support the video tag.
                </video>
              )
            )}
          </div>
        )}

        {/* 💬 Like / Reply / Retweet / Share */}
        <div className="flex justify-between text-gray-500 mt-3 text-sm">
          <button className="flex items-center gap-2 hover:text-blue-400 transition">
            <FaRegComment /> {replies}
          </button>

          <button className="flex items-center gap-2 hover:text-green-400 transition">
            <FaRetweet />
          </button>

          <button
            onClick={toggleLike}
            className={`flex items-center gap-2 transition ${
              liked ? "text-red-500" : "hover:text-red-400"
            }`}
          >
            {liked ? <FaHeart /> : <FaRegHeart />} {liked ? likes + 1 : likes}
          </button>

          <button className="flex items-center gap-2 hover:text-gray-300 transition">
            <FiUpload />
          </button>
        </div>
      </div>
    </article>
  );
}
