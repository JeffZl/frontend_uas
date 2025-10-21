//'use client'
import React from 'react';

interface ProfileHeaderElements {
    name: string;
}

export default function ProfileHeader({name}: ProfileHeaderElements) {
    return (
        <div className="profile-header">
            <div className="header-info">
                <h1 className="text-xl font-bold">{name}</h1>
                {/* <p className="text-gray-500">{postCount} Posts</p> */}
            </div>
            <button className="edit-button">
                Edit Profile
            </button>
        </div>
    )
} 
