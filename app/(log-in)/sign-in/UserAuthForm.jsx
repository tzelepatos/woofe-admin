"use client";
import { signIn } from "next-auth/react";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  showFailUserNamePassword,
  showSuccessToastLogin,
} from "@/app/Components/ToastersCustom";
import { useRouter } from "next/navigation";

export function UserAuthForm({ className, ...props }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  async function loginUser(event) {
    setError(null);
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    if (!data.email || !data.password) {
      const newError = "All fields are required !";
      setError(newError);
      showFailUserNamePassword(newError);
      return;
    }
    try {
      const res = await signIn("credentials", {
        ...data,
        redirect: false,
      });
      if (res.error) {
        const newError = "Invalid Username or Password !";
        showFailUserNamePassword(newError);

        return;
      }
      console.log("data.email ", data);
      showSuccessToastLogin(data.email); // Show success toast
      router.replace("/home");
    } catch (error) {
      console.error(error);
      return;
    }
    // router.push("/home");
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={loginUser}>
        <div className="grid gap-6">
          <div className="flex-col items-center  flex  justify-center">
            <Input
              className="bg-background mb-4 h-[45px] w-2/3 md:w-full rounded-xl"
              id="email"
              placeholder="Username or email"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              value={data.email}
              onChange={(event) => {
                setData({ ...data, email: event.target.value });
              }}
            />
            <Input
              className="bg-background mt-2 mb-4 h-[45px] w-2/3 md:w-full rounded-xl "
              id="password"
              placeholder="Password"
              type="password"
              autoCapitalize="none"
              autoComplete="password"
              autoCorrect="off"
              disabled={isLoading}
              value={data.password}
              onChange={(event) => {
                setData({ ...data, password: event.target.value });
              }}
            />
          </div>
          <div className="flex-col items-center  flex  justify-center">
            <Button
              variant="signIn"
              size="create"
              disabled={isLoading}
              type="submit" //zod? or forms?
            >
              {isLoading && (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              )}
              SIGN IN
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
