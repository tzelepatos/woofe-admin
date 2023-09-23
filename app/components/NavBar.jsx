"use client";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useTheme } from "next-themes";

//images
import logoLight from "../assest/images/Logo-white.svg";
import logoDark from "../assest/images/Logo-dark.svg";

//components
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/app/components/ModeToggle";

export default function Navbar() {
  const { status } = useSession();
  const { theme } = useTheme();

  return (
    <div className="p-4 flex justify-between items-center shadow-md h-20 bg-jimGray border-b border-black ">
      <Link href={"/"} className="flex items-center ml-7">
        {theme === "light" ? (
          <Image
            className="w-24 h-24"
            src={logoLight}
            width={150}
            height={150}
            alt="light"
            priority={false}
          />
        ) : (
          <Image
            className="w-24 h-24"
            src={logoDark}
            width={150}
            height={150}
            alt="dark"
            priority={true}
          />
        )}
      </Link>
      <ModeToggle />

      <Button variant="default" size="lg">
        TEST
      </Button>

      {status === "authenticated" ? (
        <Button
          onClick={() => signOut()}
          variant="primary"
          size="icon"
          className="shadow-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
            />
          </svg>
        </Button>
      ) : (
        <Button asChild variant="signIn" size="create">
          <Link href="/log-in">Login</Link>
        </Button>
      )}
    </div>
  );
}
