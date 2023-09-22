import Image from "next/image";
import Link from "next/link";

import { UserAuthForm } from "@/app/(log-in)/sign-up/UserAuthForm";

export default function AuthenticationPage() {
  return (
    <>
      <div className="sm:w-[550px] md:w-[750px] relative h-[500px] w-[400px] flex-col items-center flex justify-center bg-jimOrange ">
        <div className="mx-auto flex  flex-col justify-center space-y-12 w-[350px]">
          <div className="flex flex-col space-y-4 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white font-sans ">
              Create an account
            </h1>
            <p className="font-ubuntu text-sm text-muted-foreground text-white font-ubuntu  ">
              Enter your email below to create your account
            </p>
          </div>
          <UserAuthForm />

          <p className="px-8 text-center text-sm text-muted-foreground text-white">
            By clicking continue, you agree to our{" "}
            <Link
              href="/terms"
              className="underline underline-offset-4 hover:text-primary"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="underline underline-offset-4 hover:text-primary"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </>
  );
}
