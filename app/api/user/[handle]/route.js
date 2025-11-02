import { connectToDB } from "@/lib/mongodb";
import User from "@/models/User";
import { updateUserByHandle, deleteUserByHandle } from "@/controllers/userController";

export async function GET(req, { params }) {
  try {
    await connectToDB();

    const { handle } = await params;

    if (!handle) {
      return Response.json(
        { error: "Missing handle parameter" },
        { status: 400 }
      );
    }

    const user = await User.findOne({ handle: handle.toLowerCase() })
      .select(
        "handle name bio profilePicture coverPicture followersCount followingCount tweetsCount likesCount createdAt"
      )
      .lean();

    if (!user) {
      return Response.json({ error: "User not found" }, { status: 404 });
    }

    return Response.json({ user }, { status: 200 });
  } catch (error) {
    console.error("Error fetching user profile:", error);
    return Response.json(
      { error: "Failed to fetch user profile" },
      { status: 500 }
    );
  }
}

export async function PUT(request, { params }) {
  try {
    const body = await request.json();
    const { handle } = await params;
    const updatedUser = await updateUserByHandle(handle, body);
    return Response.json({ message: "User updated successfully!", user: updatedUser }, { status: 200 });
  } catch (error) {
    return Response.json({ error: error.message }, { status: error.status || 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    const { handle } = await params;
    await deleteUserByHandle(handle);
    return Response.json({ message: "User deleted successfully!" }, { status: 200 });
  } catch (error) {
    return Response.json({ error: error.message }, { status: error.status || 500 });
  }
}
