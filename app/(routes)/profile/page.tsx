import React from "react"
import ProfileHeader from "@/components/Profile/ProfileHeader"
import UserBio from "@/components/Profile/UserBio"
import ProfileTabs from "@/components/Profile/ProfileTabs"

const page = () => {
    return (
        <div>
           
            <ProfileHeader
                name="Jane Doe"
            />
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