import { connectToDB } from "@/lib/mongodb";
import User from "@/models/User";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

const SECRET = process.env.JWT_SECRET || "your-secret-key";

/**
 * GET /api/user/me
 * Returns the currently authenticated user's information.
 */
export async function GET() {
    try {
        await connectToDB();

        // 1️⃣ Read session token from cookies
        const cookieStore = await cookies();
        const token = cookieStore.get("session_token")?.value;

        if (!token) {
            return Response.json({ error: "Not authenticated" }, { status: 401 });
        }

        // 2️⃣ Verify JWT
        let decoded;
        try {
            decoded = jwt.verify(token, SECRET);
        } catch (err) {
            return Response.json({ error: "Invalid or expired token" }, { status: 403 });
        }

        // 3️⃣ Find user by ID from decoded token
        const user = await User.findById(decoded.id)
            .select(
                "handle name bio profilePicture coverPicture email followersCount followingCount tweetsCount likesCount createdAt"
            )
            .lean();

        if (!user) {
            return Response.json({ error: "User not found" }, { status: 404 });
        }

        // 4️⃣ Return user (password excluded automatically)
        return Response.json({ user }, { status: 200 });
    } catch (error) {
        console.error("Error fetching current user:", error);
        return Response.json({ error: "Failed to fetch user" }, { status: 500 });
    }
    }
