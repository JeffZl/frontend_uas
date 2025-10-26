import React from "react"
import ProfileHeader from "@/components/Profile/ProfileHeader"
import UserBio from "@/components/Profile/UserBio"
import ProfileTabs from "@/components/Profile/ProfileTabs"
import EditProfileButton from "@/components/Profile/EditProfile"
import Image from "next/image"

const page = () => {
    return (
        <div className="profile-main-content">
           
            <ProfileHeader
                name="Jane Doe"
            />

            <Image 
                src="/icons/banner.jpg"
                alt="Banner Image"
                width={600}
                height={200}
                className="profile-banner-image"
            />

            <div className="profile-details-section">
                <div>
                    <Image 
                        src="https://robohash.org/magnamomnisdolorem.png?size=50x50&set=set1"
                        alt="Profile Picture"
                        width={373}
                        height={120}
                        className="profile-picture"
                    />            
                </div>
                
                <div className="profile-control">
                    <EditProfileButton />
                </div>

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
        </div>
    )
}
export default page