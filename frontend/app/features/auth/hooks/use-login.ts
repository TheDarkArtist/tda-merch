import { useMutation } from "@tanstack/react-query";
import type { LoginPayload, LoginResponse } from "../types";
import { loginUser } from "../api/login";

export function useLogin() {
  return useMutation<LoginResponse, Error, LoginPayload>({
    mutationFn: loginUser,
  });
}

