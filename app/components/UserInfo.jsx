import Image from "next/image";
import { useSession } from "next-auth/react";

export default function UserInfo() {
  const { status, data: session } = useSession();

  if (status === "authenticated") {
    const userImage = session?.user?.image;
    const userRole = session?.user?.role; // Add this line to get the user's role

    return (
      <div className="flex flex-col md:flex-row items-center p-2 gap-2">
        <Image
          className="rounded-full shadow-xl"
          src={userImage}
          width={40}
          height={40}
          alt="am i pretty?"
        />
        <div className="text-sm mt-2 md:mt-0 md:ml-4">
          <div className="font-semibold">{session?.user?.name}</div>
          <div>{session?.user?.email}</div>
          <div>Role: {userRole}</div> {/* Display the user's role */}
        </div>
      </div>
    );
  }
}
