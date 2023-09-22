"use client";
import { useSession } from "next-auth/react";

//components
import UserInfo from "@/app/components/UserInfo";

export default function Home() {
  const { data: session } = useSession();
  if (!session) return;
  return (
    <>
      <div className="flex justify-between font-sans text-xl text-primary ">
        <h2>
          Wellcome, <b>{session?.user?.name} !</b>
        </h2>

        <div className="bg-jimGrayLight rounded-lg  text-black  ">
          <UserInfo />
        </div>
      </div>
    </>
  );
}
