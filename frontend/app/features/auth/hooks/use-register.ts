import { useMutation } from "@tanstack/react-query";
import { registerUser } from "../api/register";
import type { RegisterPayload, LoginResponse } from "../types";

export function useRegister() {
  return useMutation<LoginResponse, Error, RegisterPayload>({
    mutationFn: registerUser,
  });
}
