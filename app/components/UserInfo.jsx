import Image from "next/image";
import avatar from "@/assets/images/AVATAR.svg"; // Import the avatar image directly

export default function UserInfo({ session }) {
  console.log("session:", session);

  const userImage = session?.user?.image || avatar; // Use the imported avatar image directly
  const userRole = session?.role || session?.user?.role || "Guest";
  // console.log("role", userRole);

  return (
    <div className="flex flex-col md:flex-row items-center p-2 gap-2">
      <Image
        className="rounded-full shadow-xl"
        src={userImage}
        width={40}
        height={40}
        alt="User avatar"
      />
      <div className="text-sm mt-2 md:mt-0 md:ml-4">
        <div className="font-semibold">{session?.user?.name || "Guest"}</div>
        <div>{session?.user?.email || "No email provided"}</div>
        <div>Role: {userRole}</div>
      </div>
    </div>
  );
}
