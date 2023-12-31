import Image from "next/image";
import Link from "next/link";

import { UserAuthForm } from "@/app/(log-in)/sign-in/UserAuthForm";

export default function SignInPage() {
  return (
    <>
      <div className="m-2 overflow-hidden rounded-3xl shadow-lg ">
        <div className=" lg:w-[650px] md:w-[500px] w-[360px] h-[500px] flex-col items-center flex justify-center bg-jimGray ">
          <div className="mx-auto flex  flex-col justify-center space-y-12 w-[350px]">
            <div className="flex flex-col space-y-4 text-center">
              <h1 className="flex  justify-center  md:text-3xl text-2xl font-bold tracking-tight text-foreground font-sans ">
                Sign in with your account
              </h1>
            </div>
            <UserAuthForm />

            <p className="px-8 text-center text-sm text-muted-foreground text-black">
              Forgot your password ? Click{"   "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary font-bold"
              >
                Here!{"   "}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
