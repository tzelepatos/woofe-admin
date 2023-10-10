"use client";
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
      {/* <Link
        href={"/"}
        className={`flex gap-2 mb-6 p-1  ${
          pathname === "/" ? activeLink : inactiveLink
        } ${hoverLink}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="20"
          fill="currentColor"
          viewBox="0 0 18 20"
        >
          <path d="M7.55.53a2.25 2.25 0 012.9 0l6.75 5.692c.507.428.8 1.057.8 1.72v9.31a1.75 1.75 0 01-1.75 1.75h-3.5a1.75 1.75 0 01-1.75-1.75v-5.007a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25v5.007a1.75 1.75 0 01-1.75 1.75h-3.5A1.75 1.75 0 010 17.252v-9.31c0-.663.293-1.292.8-1.72L7.55.53zm1.933 1.147a.75.75 0 00-.966 0l-6.75 5.692a.75.75 0 00-.267.573v9.31c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-5.007c0-.967.784-1.75 1.75-1.75h3.5c.966 0 1.75.783 1.75 1.75v5.007c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-9.31a.75.75 0 00-.267-.573l-6.75-5.692z"></path>
        </svg>
        Admin
      </Link> */}
      <nav className="flex flex-col space-y-6">
        <Link
          href={"/home"}
          className={`${
            pathname === "/home" ? activeLink : inactiveLink
          } ${hoverLink}`}
        >
          <svg
            className="mr-1"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="20"
            viewBox="0 0 18 20"
            fill="currentColor"
          >
            <path d="M7.55.53a2.25 2.25 0 012.9 0l6.75 5.692c.507.428.8 1.057.8 1.72v9.31a1.75 1.75 0 01-1.75 1.75h-3.5a1.75 1.75 0 01-1.75-1.75v-5.007a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25v5.007a1.75 1.75 0 01-1.75 1.75h-3.5A1.75 1.75 0 010 17.252v-9.31c0-.663.293-1.292.8-1.72L7.55.53zm1.933 1.147a.75.75 0 00-.966 0l-6.75 5.692a.75.75 0 00-.267.573v9.31c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-5.007c0-.967.784-1.75 1.75-1.75h3.5c.966 0 1.75.783 1.75 1.75v5.007c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-9.31a.75.75 0 00-.267-.573l-6.75-5.692z"></path>
          </svg>
          Home
        </Link>
        <Link
          href={"/products"}
          className={`${
            pathname.includes("/products") ? activeLink : inactiveLink
          } ${hoverLink}`}
        >
          <svg
            className="mr-1"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 20 20"
            strokeWidth={1} //blod
          >
            <path d="M8.591.275a3.75 3.75 0 012.818 0l7.498 3.04A1.75 1.75 0 0120 4.936v9.653a1.75 1.75 0 01-1.093 1.622l-7.498 3.04a3.75 3.75 0 01-2.818 0l-7.498-3.04A1.75 1.75 0 010 14.589V4.936a1.75 1.75 0 011.093-1.621L8.59.275zm2.254 1.39a2.25 2.25 0 00-1.69 0L7.24 2.44l7.527 2.927 2.669-1.03-6.592-2.673zm1.846 4.505L5.215 3.262 2.59 4.326l7.411 2.882 2.69-1.038zM1.5 14.59a.25.25 0 00.156.23l7.499 3.04c.031.014.063.026.095.037V8.526L1.5 5.512v9.077zm9.345 3.27l7.499-3.04a.25.25 0 00.156-.23V5.534l-7.75 2.992v9.37a2.18 2.18 0 00.095-.036z"></path>
          </svg>
          Products
        </Link>
        <Link
          href={"/categories"}
          className={`${
            pathname === "/categories" ? activeLink : inactiveLink
          } ${hoverLink}`}
        >
          {" "}
          <svg
            className="mr-1"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 20 20"
            strokeWidth={1.5}
          >
            <path d="M4.248 14.002c.966 0 1.75.784 1.75 1.75v2.498A1.75 1.75 0 014.248 20H1.75A1.75 1.75 0 010 18.25v-2.498c0-.966.783-1.75 1.75-1.75h2.498zm0 1.5H1.75a.25.25 0 00-.25.25v2.498c0 .138.112.25.25.25h2.498a.25.25 0 00.25-.25v-2.498a.25.25 0 00-.25-.25zm3.5.498h11.505a.75.75 0 01.102 1.493l-.102.007H7.748a.75.75 0 01-.102-1.493L7.748 16zm-3.5-8.999c.966 0 1.75.784 1.75 1.75v2.498a1.75 1.75 0 01-1.75 1.75H1.75A1.75 1.75 0 010 11.249V8.75c0-.966.783-1.75 1.75-1.75h2.498zm0 1.5H1.75a.25.25 0 00-.25.25v2.498c0 .138.112.25.25.25h2.498a.25.25 0 00.25-.25V8.75a.25.25 0 00-.25-.25zm3.5.499h11.505a.75.75 0 01.102 1.493l-.102.007H7.748a.75.75 0 01-.102-1.493L7.748 9zm-3.5-9c.966 0 1.75.783 1.75 1.75v2.498a1.75 1.75 0 01-1.75 1.75H1.75A1.75 1.75 0 010 4.248V1.75C0 .783.783 0 1.75 0h2.498zm0 1.5H1.75a.25.25 0 00-.25.25v2.498c0 .138.112.25.25.25h2.498a.25.25 0 00.25-.25V1.75a.25.25 0 00-.25-.25zm3.5.5h11.505a.75.75 0 01.102 1.493l-.102.007H7.748a.75.75 0 01-.102-1.493L7.748 2z"></path>
          </svg>
          Categories
        </Link>
        <Link
          href={"/orders"}
          className={`${
            pathname === "/orders" ? activeLink : inactiveLink
          } ${hoverLink}`}
        >
          <svg
            className="mr-2"
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="20"
            viewBox="0 0 15 20"
            fill="currentColor"
          >
            <path d="M6 7.8a.6.6 0 01.6-.6h4.2a.6.6 0 010 1.2H6.6a.6.6 0 01-.6-.6zm0 3.6a.6.6 0 01.6-.6h4.2a.6.6 0 010 1.2H6.6a.6.6 0 01-.6-.6zM6 15a.6.6 0 01.6-.6h4.2a.6.6 0 010 1.2H6.6A.6.6 0 016 15zM4.8 7.8a.9.9 0 11-1.8 0 .9.9 0 011.8 0zm0 3.6a.9.9 0 11-1.8 0 .9.9 0 011.8 0zm-.9 4.5a.9.9 0 100-1.8.9.9 0 000 1.8zM3.702 1.2A1.8 1.8 0 015.4 0H9c.784 0 1.45.5 1.697 1.2H12.6A1.8 1.8 0 0114.4 3v14.4a1.8 1.8 0 01-1.8 1.8H1.8A1.8 1.8 0 010 17.4V3a1.8 1.8 0 011.8-1.8h1.902zm1.698 0a.6.6 0 000 1.2H9a.6.6 0 000-1.2H5.4zM3.702 2.4H1.8a.6.6 0 00-.6.6v14.4a.6.6 0 00.6.6h10.8a.6.6 0 00.6-.6V3a.6.6 0 00-.6-.6h-1.902A1.8 1.8 0 019 3.6H5.4a1.8 1.8 0 01-1.698-1.2z"></path>
          </svg>
          Orders
        </Link>
        <Link
          href={"/settings"}
          className={`${
            pathname === "/settings" ? activeLink : inactiveLink
          } ${hoverLink}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.3} //bold
            stroke="currentColor"
            className="w-6 h-6 -ml-1.5 mr-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          Settings
        </Link>
        <button
          onClick={() => signOut()}
          className={`${
            pathname === "/logout" ? activeLink : inactiveLink
          } ${hoverLink}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 -ml-1 mr-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
            />
          </svg>
          Logout
        </button>
      </nav>
    </aside>
  );
};

export default NavLeft;
