"use client";
import { signIn, useSession } from "next-auth/react";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import Link from "next/link";

export function UserAuthButtons({ className, ...props }) {
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
  async function handleLoginButtonClickFacebook(event) {
    event.stopPropagation();
    event.preventDefault();
    await signIn("facebook", { callbackUrl: "/home" }); //?????
  }
  const session = useSession();
  if (session?.status === "authenticated") {
    redirect("/home");
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="flex-col items-center  flex  justify-center mb-12 ">
            <Link href="/sign-in">
              <Button
                className="mb-5"
                variant="logIn"
                size="logIn"
                type="button"
                disabled={isLoading}
              >
                {isLoading ? (
                  <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Icons.email className="mr-2 h-4 w-4" />
                )}{" "}
                EMAIL
              </Button>
            </Link>

            <Button
              onClick={handleLoginButtonClick}
              className="mb-5"
              variant="logIn"
              size="logIn"
              type="button"
              disabled={isLoading}
            >
              {isLoading ? (
                <Icons.google className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Icons.google className="mr-2 h-4 w-4" />
              )}{" "}
              GOOGLE
            </Button>
            <Button
              onClick={handleLoginButtonClickFacebook}
              variant="logIn"
              size="logIn"
              type="button"
              disabled={isLoading}
            >
              {isLoading ? (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Icons.facebook className="mr-2 h-4 w-4" />
              )}{" "}
              FACEBOOK
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
