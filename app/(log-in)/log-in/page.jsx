import { UserAuthForm } from "@/app/(log-in)/log-in/UserAuthForm";
import { UserAuthButtons } from "@/app/(log-in)/log-in/UserAuthButtons";

export default function AuthenticationPage() {
  return (
    <>
      <div className="m-2 overflow-hidden rounded-3xl shadow-lg">
        <div className="sm:w-[550px] md:w-[750px] relative h-[350px] w-[400px] flex-col items-center flex justify-center bg-jimOrange ">
          <div className="mx-auto flex flex-col justify-center space-y-12 w-[350px]">
            <div className="flex flex-col space-y-4 text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white font-sans">
                Create an account
              </h1>
              <p className="text-sm text-muted-foreground text-white font-ubuntu">
                enter your email
              </p>
            </div>
            <UserAuthForm />
          </div>
        </div>

        {/* Gray div with buttons */}
        <div className="sm:w-[550px] md:w-[750px] relative h-[350px] w-[400px] flex-col items-center flex justify-center bg-jimGrayLight ">
          <div className=" flex flex-col justify-center space-y-10 w-[350px]">
            <div className="flex flex-col  text-center ">
              <h1 className="text-4xl font-bold tracking-tight text-black font-sans mb-10">
                Or sign in with
              </h1>
              <UserAuthButtons />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
