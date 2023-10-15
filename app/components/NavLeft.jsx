"use client";
import { Icons } from "@/components/ui/icons";
import { signOut } from "next-auth/react";
import Link from "next/link";

import { usePathname } from "next/navigation";

const NavLeft = () => {
  const inactiveLink = "flex gap-1 p-1";
  const activeLink =
    inactiveLink + "  bg-background text-jimOrange rounded-md text-orange-500";
  const hoverLink = "hover:bg-background rounded-md";
  const pathname = usePathname();

  return (
    <aside className="p-8 bg-jimGrayLight min-h-screen ">
      <nav className="flex flex-col space-y-6">
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
          href={"/categories"}
          className={`${
            pathname === "/categories" ? activeLink : inactiveLink
          } ${hoverLink}`}
        >
          <Icons.categories />
          Categories
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
