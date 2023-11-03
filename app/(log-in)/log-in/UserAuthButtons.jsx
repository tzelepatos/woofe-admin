"use client";
import { signIn } from "next-auth/react";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function UserAuthButtons({ className, ...props }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingGoogle, setIsLoadingGoogle] = useState(false);
  const [isLoadingFacebook, setIsLoadingFacebook] = useState(false);

  async function handleLoginButtonClickGoogle(event) {
    event.stopPropagation();
    event.preventDefault();
    setIsLoadingGoogle(true);

    setTimeout(() => {
      setIsLoadingGoogle(false);
    }, 3000);
    await signIn("google", { callbackUrl: "/home" }); //?????
  }
  async function handleLoginButtonClickFacebook(event) {
    event.stopPropagation();
    event.preventDefault();
    setIsLoadingFacebook(true);

    setTimeout(() => {
      setIsLoadingFacebook(false);
    }, 3000);
    await signIn("facebook", { callbackUrl: "/home" }); //?????
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <div className="grid gap-2">
        <div className="flex-col items-center  flex  justify-center mb-12 ">
          <Link href="/sign-in">
            <Button
              className="mb-5 "
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
            onClick={handleLoginButtonClickGoogle}
            className="mb-5"
            variant="logIn"
            size="logIn"
            type="button"
            disabled={isLoadingGoogle}
          >
            {isLoadingGoogle ? (
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
            disabled={isLoadingFacebook}
          >
            {isLoadingFacebook ? (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Icons.facebook className="mr-2 h-4 w-4 " />
            )}{" "}
            FACEBOOK
          </Button>
        </div>
      </div>
    </div>
  );
}
