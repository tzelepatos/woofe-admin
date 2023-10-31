import { UserAuthForm } from "@/app/(log-in)/log-in/UserAuthForm";
import { UserAuthButtons } from "@/app/(log-in)/log-in/UserAuthButtons";

export default function LogInPage(children) {
  return (
    <>
      <div className="lg:w-[650px] md:w-[500px] w-[360px] shadow-2xl  rounded-2xl ">
        <div className=" justify-center shadow-2xl text-background bg-jimOrange container  rounded-t-2xl p-4  ">
          <div className=" space-y-8 ">
            <div className="space-y-8  ">
              {/* h1 */}
              <h1 className="flex  justify-center  md:text-4xl text-2xl font-bold tracking-tight text-white font-sans">
                Create an account
              </h1>
              {/* p */}
              {/* <p className="flex  justify-center md:text-lg text-sm  text-white ">
                enter your email
              </p> */}
            </div>
            {/* button-input */}
            <UserAuthForm />
          </div>
        </div>

        {/* Gray div with buttons */}
        <div className="  text-foreground bg-jimGray container   rounded-b-2xl p-4  ">
          <div className=" space-y-8 ">
            <h1 className="flex  justify-center md:text-3xl text-2xl font-bold tracking-tight text-BACKGROUND font-sans">
              Or sign in with
            </h1>
            <UserAuthButtons />
          </div>
        </div>
      </div>
    </>
  );
}
