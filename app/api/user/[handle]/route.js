import { connectToDB } from "@/lib/mongodb";
import User from "@/models/User"
import Tweet from "@/models/Tweet"

export async function GET(req, { params }) {
  try {
    await connectToDB();

    const { handle } = params;

    if (!handle) {
      return Response.json(
        { error: "Missing handle parameter" },
        { status: 400 }
      );
    }

    const user = await User.findOne({ handle: handle.toLowerCase() })
      .select(
        "handle name bio profilePicture coverPicture followersCount followingCount tweetsCount likesCount createdAt tweets"
      )
      .lean();

    if (!user) {
      return Response.json({ error: "User not found" }, { status: 404 });
    }

    const tweets = await Tweet.find({ _id: { $in: user.tweets } })
      .sort({ createdAt: -1 }) // show most recent first
      .lean();

    return Response.json(
      { user: { ...user, tweets } },
      { status: 200 }
    );

  } catch (error) {
    console.error("Error fetching user profile:", error);
    return Response.json(
      { error: "Failed to fetch user profile" },
      { status: 500 }
    );
  }
}

// export async function PUT(request, { params }) {
//   try {
//     const body = await request.json();
//     const updatedUser = await updateUserByHandle(params.handle, body);
//     return Response.json({ message: "User updated successfully!", user: updatedUser }, { status: 200 });
//   } catch (error) {
//     return Response.json({ error: error.message }, { status: error.status || 500 });
//   }
// }

// export async function DELETE(request, { params }) {
//   try {
//     await deleteUserByHandle(params.handle);
//     return Response.json({ message: "User deleted successfully!" }, { status: 200 });
//   } catch (error) {
//     return Response.json({ error: error.message }, { status: error.status || 500 });
//   }
// }
