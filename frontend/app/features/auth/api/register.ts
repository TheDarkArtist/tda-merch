import type { RegisterPayload, LoginResponse } from "../types";

export async function registerUser(data: RegisterPayload): Promise<LoginResponse> {
  const res = await fetch("http://localhost:5000/api/auth/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const json = await res.json();
  if (!res.ok) throw new Error(json.msg || "Registration failed");
  return json;
}

