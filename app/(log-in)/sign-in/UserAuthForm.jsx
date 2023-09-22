"use client";
import { signIn, useSession } from "next-auth/react";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { redirect } from "next/navigation";

export function UserAuthForm({ className, ...props }) {
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(event) {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  async function handleLoginButtonClick(event) {
    event.stopPropagation();
    event.preventDefault();
    await signIn("google", { callbackUrl: "/home" }); //?????
  }
  const session = useSession();
  if (session?.status === "authenticated") {
    redirect("/home");
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-3">
            <Label className="sr-only" htmlFor="email"></Label>

            <Input
              className="bg-white mb-4 h-[45px]  rounded-xl"
              id="Username"
              placeholder="Username or email"
              type="username"
              autoCapitalize="none"
              autoComplete="username"
              autoCorrect="off"
              disabled={isLoading}
            />
            <Input
              className="bg-white mt-2 mb-4 h-[45px] rounded-xl "
              id="password"
              placeholder="Password"
              type="password"
              autoCapitalize="none"
              autoComplete="password"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <div className="flex-col items-center  flex  justify-center">
            <Button variant="signIn" size="create" disabled={isLoading}>
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
