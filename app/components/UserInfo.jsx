import Image from "next/image";
import avatar from "@/assets/images/AVATAR.svg"; // Import the avatar image directly
import { getUserImage } from "@/app/components/users/ActionsUser";

export default function UserInfo({ session }) {
  // console.log("session:", session);

  // const userRole = session?.role || session?.user?.role || "Guest";
  // console.log("role", userRole);

  return (
    <div className="  border-0 rounded-xl  flex items-center ">
      <div className="flex items-center justify-between gap-2">
        <Image
          title={session?.user.email}
          className="rounded-full shadow-xl sm:w-12 sm:h-12 w-9 h-9 border-2 border-background"
          src={
            session?.user.provider === "credentials"
              ? getUserImage(session.user.image)
              : session?.user.image
          }
          width={45}
          height={40}
          alt="User avatar"
        />
        <div className="flex-col items-center text-sm  sm:block hidden">
          <div className="text-xs ">
            {session?.user?.name || "No name provided"}
          </div>
          <div className="text-xs  font-semibold">{session?.user?.email}</div>
          {/* <div className="capitalize text-xs"> {session?.user?.role}</div> */}
        </div>
      </div>
    </div>
  );
}
