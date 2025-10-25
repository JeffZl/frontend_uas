import React from "react"
import ProfileHeader from "@/components/Profile/ProfileHeader"
import UserBio from "@/components/Profile/UserBio"
import ProfileTabs from "@/components/Profile/ProfileTabs"
import EditProfileButton from "@/components/Profile/EditProfile"
import Image from "next/image"

const page = () => {
    return (
        <div>
           
            <ProfileHeader
                name="Jane Doe"
            />

            <Image 
                src="/icons/banner.jpg"
                alt="Banner Image"
                width={745}
                height={250}
                className="profile-banner-image"
            />

            <EditProfileButton />

            <UserBio
                name="Jane Doe"
                handle="bomb_gdoe"
                bio="Just a regular Doe exploring the world." 
                birthDate="January 1, 1990"
                joinDate="March 2020"
                followingCount={150}
                followersCount={200}
            />
            <ProfileTabs />
        </div>
    )
}
export default page