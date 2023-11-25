"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { useRouter } from "next/navigation";
import {
  showFailUserNamePassword,
  showSuccessToastSignUp,
} from "@/app/components/ToastersCustom";

export function UserAuthForm({ className, ...props }) {
  const router = useRouter();
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  async function registerUser(event) {
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
      const response = await axios.post("/api/register", data);
      const userInfo = response.data;

      if (userInfo) {
        showSuccessToastSignUp(userInfo); // Show success toast
        router.push("/sign-in");
      }
    } catch (error) {
      console.error(error);
      const newError = "User already exists !";
      setError(newError);
      showFailUserNamePassword(newError);
    }
  }

  return (
    <div className={cn("grid gap-8", className)} {...props}>
      <form onSubmit={registerUser}>
        <div className="grid gap-2">
          <div className="flex  justify-center">
            <Input
              className="bg-white mb-4 h-[40px] w-2/4 rounded-xl text-black"
              id="email"
              placeholder="Email"
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
          </div>
          <div className="flex  justify-center">
            <Input
              className="bg-white mb-4 h-[40px] w-2/4 rounded-xl text-black"
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
              variant="create"
              size="create"
              disabled={isLoading}
              type="submit"
            >
              {isLoading && (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              )}
              CREATE
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
