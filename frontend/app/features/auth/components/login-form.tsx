"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema, type LoginPayload } from "../schema";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useLogin } from "../hooks/use-login";
import { NavLink, useNavigate } from "react-router";
import { useAuth } from "@/lib/auth-context";

export default function LoginForm() {
  const loginMutation = useLogin();
  const [serverError, setServerError] = useState("");
  const navigate = useNavigate()
  const { login } = useAuth();

  const form = useForm<LoginPayload>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginPayload) => {
    try {
      const { token, user } = await loginMutation.mutateAsync(data);
      login(token);
      navigate("/");
      console.log("Logged in:", user);
    } catch (err) {
      setServerError((err as Error).message);
    }
  };


  return (
    <div className="w-full max-w-md mx-auto py-12 px-6 bg-zinc-900 rounded-md">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-extrabold text-green-600">TDAMerch</h1>
        <p className="text-zinc-400 text-sm mt-1">Log in to your account</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="you@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="••••••••" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full"
            disabled={loginMutation.isPending}
          >
            {loginMutation.isPending ? "Logging in..." : "Login"}
          </Button>

          {serverError && (
            <p className="text-sm text-red-500 text-center">{serverError}</p>
          )}

          <div className="flex flex-col sm:flex-row justify-between text-sm text-zinc-400 mt-4">
            <span>
              Don’t have an account?{" "}
              <NavLink to="/auth/register" className="text-green-500 hover:underline">
                Register
              </NavLink>
            </span>
            <NavLink to="/auth/forgot-password" className="text-green-500 hover:underline mt-2 sm:mt-0">
              Forgot password?
            </NavLink>
          </div>
        </form>
      </Form>
    </div>
  );
}

