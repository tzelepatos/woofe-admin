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
import { Icons } from "@/components/ui/icons";

import { SheetNav } from "@/app/components/SheetNav";

export default function Navbar() {
  const { status } = useSession();
  const { theme } = useTheme();

  return (
    <div className=" p-4 flex justify-between items-center shadow-md h-20 bg-jimGray border-b border-black ">
      <div className="flex items-center">
        <SheetNav></SheetNav>

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
      </div>
      <div className="flex gap-2">
        <ModeToggle />

        {status === "authenticated" ? (
          <Button
            onClick={() => signOut()}
            variant="destructive"
            size="icon"
            className="shadow-lg"
          >
            <Icons.logOut></Icons.logOut>
          </Button>
        ) : (
          <Button asChild variant="signIn" size="create">
            <Link href="/log-in">Login</Link>
          </Button>
        )}
      </div>
    </div>
  );
}
