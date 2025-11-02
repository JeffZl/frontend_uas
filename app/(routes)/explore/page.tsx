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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrends = async () => {
      try {
        const res = await fetch("/api/trends", {
          credentials: "include",
        });
        if (res.ok) {
          const data = await res.json();
          setTrending(data.trends || []);
        }
      } catch (error) {
        console.error("Error fetching trends:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrends();
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
        {loading ? (
          <div className="space-y-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="p-3 rounded-lg bg-[#202327] animate-pulse">
                <div className="w-24 h-3 bg-gray-700 rounded mb-2" />
                <div className="w-32 h-4 bg-gray-700 rounded mb-2" />
                <div className="w-20 h-3 bg-gray-700 rounded" />
              </div>
            ))}
          </div>
        ) : trending.length === 0 ? (
          <div className="py-8 text-center text-gray-500">
            <p>No trends available yet</p>
            <p className="text-sm mt-2">Start using hashtags in your posts to see trends!</p>
          </div>
        ) : (
          <div className="space-y-3">
            {trending.map(({ postCount, title, topic }, index) => (
              <Trenditem key={`${title}-${index}`} postCount={postCount} title={title} topic={topic} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
