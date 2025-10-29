import jwt from "jsonwebtoken"
import { cookies } from "next/headers"

const JWT_TOKEN = process.env.JWT_SECRET

export async function GET() {
  const token = cookies().get("session_token")?.value;

  if (!token) {
    return Response.json({ authenticated: false }, { status: 401 });
  }

  try {
    const decoded = jwt.verify(token, JWT_TOKEN);
    return Response.json({ authenticated: true, user: decoded });
  } catch {
    return Response.json({ authenticated: false }, { status: 401 });
  }
}
