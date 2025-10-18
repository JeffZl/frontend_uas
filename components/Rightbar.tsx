'use client';

import UserItem from './UserItem';

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
            <div className="border border-[#2f3336] rounded-2xl p-4">
                <h3 className="text-lg font-bold mb-2.5">Who to follow</h3>
                
                <div className="flex flex-col gap-3">
                    {suggestions.map(({ name, avatar, handle }) => (
                        <UserItem key={name} name={name} avatar={avatar} handle={handle} />
                    ))}
                </div>
            </div>
        </section>
    );
}