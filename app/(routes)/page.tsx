import TweetItem from "@/components/TweetItem";

export default function HomePage() {
  const tweets = [
    {
      _id: "1",
      author: {
        name: "Alice",
        handle: "@alice",
        avatar: "https://robohash.org/alice.png?size=50x50",
      },
      content: "Excited to share my new project! 🚀",
      media: [{ url: "https://via.placeholder.com/600x300", type: "image" }],
      likes: 12,
      replies: 3,
      createdAt: "2025-10-18T10:00:00Z",
    },
    {
      _id: "2",
      author: {
        name: "Bob",
        handle: "@bob",
        avatar: "https://robohash.org/bob.png?size=50x50",
      },
      content: "MongoDB + Next.js + Tailwind = ❤️",
      likes: 5,
      replies: 0,
      createdAt: "2025-10-17T15:30:00Z",
    },
  ];

  return (
    <main className="text-white bg-black min-h-screen">
      <h1 className="p-4 text-xl font-bold border-b border-[#2f3336]">Home</h1>
      {tweets.map((tweet) => (
        <TweetItem key={tweet._id} {...tweet} />
      ))}
    </main>
  );
}
