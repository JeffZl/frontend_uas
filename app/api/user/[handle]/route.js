import { getUserByHandle, updateUserByHandle, deleteUserByHandle } from "@/controllers/userController";

export async function GET(request, { params }) {
  try {
    const user = await getUserByHandle(params.handle);
    return Response.json(user, { status: 200 });
  } catch (error) {
    return Response.json({ error: error.message }, { status: error.status || 500 });
  }
}

export async function PUT(request, { params }) {
  try {
    const body = await request.json();
    const updatedUser = await updateUserByHandle(params.handle, body);
    return Response.json({ message: "User updated successfully!", user: updatedUser }, { status: 200 });
  } catch (error) {
    return Response.json({ error: error.message }, { status: error.status || 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    await deleteUserByHandle(params.handle);
    return Response.json({ message: "User deleted successfully!" }, { status: 200 });
  } catch (error) {
    return Response.json({ error: error.message }, { status: error.status || 500 });
  }
}
