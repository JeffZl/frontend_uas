// app/components/Rightbar.tsx
'use client';

import Image from 'next/image';

// This data can be fetched from an API in a real application
const suggestions = [
    { name: "Excell", handle: "@excell", avatar: "https://robohash.org/jane.png?size=50x50" },
    { name: "Thendy", handle: "@thendy", avatar: "https://robohash.org/mark.png?size=50x50" },
    { name: "Jeffly", handle: "@jeffly", avatar: "https://robohash.org/alice.png?size=50x50" },
    { name: "Andrean", handle: "@andrean", avatar: "https://robohash.org/magnamomnisdolorem.png?size=50x50&set=set1" },
    { name: "Viencent", handle: "@viencent", avatar: "https://robohash.org/fugitsitet.png?size=50x50&set=set1" },
];

export default function Rightbar() {
    return (
        <section className="p-5 flex-col gap-5 hidden xl:flex border-l border-[#2f3336] flex-[1.5]">
            
            {/* Follow Suggestions Card */}
            <div className="border border-[#2f3336] rounded-2xl p-4">
                <h3 className="text-lg font-bold mb-2.5">Who to follow</h3>
                
                <div className="flex flex-col gap-3">
                    {suggestions.map((user) => (
                        // User Card
                        <div className="flex items-center justify-between" key={user.handle}>
                            <div className="flex items-center gap-2.5">
                                <Image 
                                    src={user.avatar} 
                                    alt={user.name}
                                    width={40}
                                    height={40}
                                    className="rounded-full"
                                />
                                <div className="flex-grow">
                                    <span className="block font-bold">{user.name}</span>
                                    <span className="text-sm text-gray-500">{user.handle}</span>
                                </div>
                            </div>
                            <button className="bg-white text-black font-bold text-sm py-1.5 px-3 rounded-full hover:bg-gray-200 transition-colors">
                                Follow
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}