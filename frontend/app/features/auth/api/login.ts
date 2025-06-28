import type { LoginPayload, LoginResponse } from "../types";

export async function loginUser(data: LoginPayload): Promise<LoginResponse> {
  const res = await fetch("http://localhost:5000/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const json = await res.json();
  if (!res.ok) throw new Error(json.msg || "Login failed");
  return json;
}

