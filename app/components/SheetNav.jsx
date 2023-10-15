import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

export function SheetNav() {
  const inactiveLink = "flex gap-1 p-1";
  const activeLink =
    inactiveLink + "  bg-background text-jimOrange rounded-md text-orange-500";
  const hoverLink = "hover:bg-jimGrayLight rounded-md";
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="navBar"
          size="icon2"
          className="shadow-sm block md:hidden "
        >
          <Icons.hamburger></Icons.hamburger>
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="min-w-full bg-jimGray space-y-6">
        <SheetClose asChild>
          <Link
            href={"/home"}
            className={`${
              pathname === "/home" ? activeLink : inactiveLink
            } ${hoverLink}`}
          >
            <Icons.home />
            Home
          </Link>
        </SheetClose>
        <SheetClose asChild>
          <Link
            href={"/products"}
            className={`${
              pathname.includes("/products") ? activeLink : inactiveLink
            } ${hoverLink}`}
          >
            <Icons.products />
            Products
          </Link>
        </SheetClose>
        <SheetClose asChild>
          <Link
            href={"/categories"}
            className={`${
              pathname === "/categories" ? activeLink : inactiveLink
            } ${hoverLink}`}
          >
            <Icons.categories />
            Categories
          </Link>
        </SheetClose>
        <SheetClose asChild>
          <Link
            href={"/orders"}
            className={`${
              pathname === "/orders" ? activeLink : inactiveLink
            } ${hoverLink}`}
          >
            <Icons.orders />
            Orders
          </Link>
        </SheetClose>
        <SheetClose asChild>
          <Link
            href={"/settings"}
            className={`${
              pathname === "/settings" ? activeLink : inactiveLink
            } ${hoverLink}`}
          >
            <Icons.settings />
            Settings
          </Link>
        </SheetClose>
        <SheetClose asChild>
          <button
            onClick={() => signOut()}
            className={`${
              pathname === "/logout" ? activeLink : inactiveLink
            } ${hoverLink}`}
          >
            <Icons.logOut />
            Logout
          </button>
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
}
