import { connectToDB } from "@/lib/mongodb";
import User from "@/models/User"

// Update user profile
export const updateUserByHandle = async (handle: string, body: any) => {
    await connectToDB();

    if (!handle) throw { status: 400, message: "Missing handle, please try again!" };

    const allowedFields = [
        "name",
        "bio",
        "location",
        "website",
        "birthdate",
        "profilePicture",
        "coverPicture",
    ];

    const updates: any = {};
    for (const field of allowedFields) {
        if (body[field] !== undefined) updates[field] = body[field];
    }

    if (Object.keys(updates).length === 0) {
        throw { status: 400, message: "No valid fields provided for update" };
    }

    const updatedUser = await User.findOneAndUpdate(
        { handle },
        { $set: updates },
        { new: true }
    ).select("-password");

    if (!updatedUser) throw { status: 404, message: "User not found, please try again!" };

    return updatedUser;
};

// Delete user profile
export const deleteUserByHandle = async (handle: string) => {
    await connectToDB();

    if (!handle) throw { status: 400, message: "Missing handle, please try again!" };

    const user = await User.findOneAndDelete({ handle });

    if (!user) throw { status: 404, message: "User not found, please try again!" };

    return true;
};