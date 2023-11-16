"use client";
import { Icons } from "@/components/ui/icons";
import { signOut } from "next-auth/react";
import Link from "next/link";

import { usePathname } from "next/navigation";

const NavLeft = () => {
  const inactiveLink = "flex gap-1 p-1";
  const activeLink =
    inactiveLink + "  bg-background text-jimOrange rounded-md font-bold w-32 ";
  const hoverLink = "hover:bg-background rounded-md pl-2";
  const pathname = usePathname();

  return (
    <aside className="p-8 bg-jimGrayLight min-h-full ">
      <nav className="flex flex-col space-y-6 ">
        <Link
          href={"/home"}
          className={`${
            pathname === "/home" ? activeLink : inactiveLink
          } ${hoverLink}`}
        >
          <Icons.home />
          Home
        </Link>
        <Link
          href={"/products"}
          className={`${
            pathname.includes("/products") ? activeLink : inactiveLink
          } ${hoverLink}`}
        >
          <Icons.products />
          Products
        </Link>
        <Link
          href={"/users"}
          className={`${
            pathname.includes("/users") || pathname.includes("/newuser")
              ? activeLink
              : inactiveLink
          } ${hoverLink}`}
        >
          <Icons.users />
          Users
        </Link>
        <Link
          href={"/orders"}
          className={`${
            pathname === "/orders" ? activeLink : inactiveLink
          } ${hoverLink}`}
        >
          <Icons.orders />
          Orders
        </Link>
        <Link
          href={"/settings"}
          className={`${
            pathname === "/settings" ? activeLink : inactiveLink
          } ${hoverLink}`}
        >
          <Icons.settings />
          Settings
        </Link>
        <Link
          href={"/contact"}
          className={`${
            pathname === "/contact" ? activeLink : inactiveLink
          } ${hoverLink}`}
        >
          <Icons.emailOpen />
          Contact
        </Link>
        <button
          onClick={() => signOut()}
          className={`${
            pathname === "/logout" ? activeLink : inactiveLink
          } ${hoverLink}`}
        >
          <Icons.logOut className="-ml-2 mr-1 w-6 h-6" />
          Logout
        </button>
      </nav>
    </aside>
  );
};

export default NavLeft;
