"use client";

import Trenditem from "@/components/TrendItem";
import { useEffect, useState } from "react";

interface Trend {
  topic: string;
  title: string;
  postCount: string;
}

export default function FeedPage() {
  const [trending, setTrending] = useState<Trend[]>([]);

  useEffect(() => {
    const trends: Trend[] = [
      { topic: "Esports", title: "Valorant Champions", postCount: "12.3K posts" },
      { topic: "Music", title: "Taylor Swift", postCount: "89.1K posts" },
      { topic: "Technology", title: "AI Revolution", postCount: "45.7K posts" },
      { topic: "Movies", title: "Avengers Reboot", postCount: "23.4K posts" },
    ];

    setTrending(trends);
  }, []);

  return (
    <main className="min-h-screen bg-black text-white border-x border-[#2f3336] p-4">
      <div className="p-4 border-b border-[#2f3336]">
        <input
          type="text"
          placeholder="Search Quotes or Topics..."
          className="w-full bg-[#202327] text-white px-4 py-2 rounded-full outline-none placeholder-gray-400"
        />
      </div>

      <section className="p-4">
        <h2 className="text-xl font-bold mb-4">Trending Now</h2>
        <div className="space-y-3">
          {trending.map(({ postCount, title, topic }) => (
            <Trenditem key={title} postCount={postCount} title={title} topic={topic} />
          ))}
        </div>
      </section>
    </main>
  );
}
