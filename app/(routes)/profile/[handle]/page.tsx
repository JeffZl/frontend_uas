"use client"
import React from "react"
import ProfileHeader from "@/components/Profile/ProfileHeader"
import UserBio from "@/components/Profile/UserBio"
import ProfileTabs from "@/components/Profile/ProfileTabs"
import EditProfileButton from "@/components/Profile/EditProfile"
import TweetItem from "@/components/TweetItem"
import Image from "next/image"
import { useState, useEffect } from "react"

const page = ({ params }: { params: { handle: string }}) => {
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log(params.handle)
        const fetchUser = async () => {
            try {
                const res = await fetch(`/api/user/${params.handle}`, {
                    cache: "no-store",
                    credentials: "include",
                });

                if (!res.ok) throw new Error("Failed to fetch user");

                const { user: fetchedUser } = await res.json();
                setUser(fetchedUser);
                console.log(fetchedUser)
            } catch (error) {
                console.error("Error fetching user:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, []);

    return (
        <div className="profile-main-content">
            {/* Profile Header */}
            <ProfileHeader name={user?.name} />

            {/* Banner */}
            <Image
                src="/icons/banner.jpg"
                alt="Banner Image"
                width={600}
                height={200}
                className="profile-banner-image"
            />

            {/* Profile details */}
            <div className="profile-details-section">
                <div>   
                    {user?.profilePicture?.url ? (
                        <Image
                            src={user?.profilePicture?.url || "https://robohash.org/default.png"}
                            alt="Profile Picture"
                            width={120}
                            height={120}
                            className="absolute bg-[var(--color-surface)] overflow-hidden w-[120px] h-[120px] rounded-full border-[4px] border-[var(--color-background)] top-[-60px] left-4 z-[100]"
                        />
                    ) : (
                        <div className="absolute w-[120px] h-[120px] flex items-center justify-center rounded-full bg-gray-700 border-[4px] border-[var(--color-background)] top-[-60px] left-4 z-[100]">
                            <span className="text-white font-bold text-4xl">
                            {user?.name?.[0]?.toUpperCase() || "?"}
                            </span>
                        </div>
                    )}

                </div>

                <div className="profile-control">
                    <EditProfileButton />
                </div>

                <UserBio
                    name={user?.name}
                    handle={user?.handle}
                    bio={user?.bio}
                    birthDate="January 1, 1990"
                    joinDate={new Date(user?.createdAt).toLocaleString("en-GB", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                    })}
                    followingCount={user?.followingCount}
                    followersCount={user?.followersCount}
                />

                <ProfileTabs />
            </div>

            {/* ✅ Tweet feed */}
            <div className="mt-6">
                {user?.tweetsCount > 0 ? (
                    user.tweets.map((tweet) => (
                        <TweetItem
                            key={tweet._id}
                            author={{
                                name: user?.name,
                                handle: `@${user?.handle}`,
                                avatar: user?.avatar,
                            }}
                            content={tweet.content}
                            media={tweet.media}
                            likes={tweet.likes}
                            replies={tweet.replies}
                            createdAt={tweet.createdAt}
                        />
                    ))
                ) : (
                    <div className="p-4 text-center text-gray-400">
                        No tweets yet
                    </div>
                )}
            </div>
        </div>
    );
}
export default page