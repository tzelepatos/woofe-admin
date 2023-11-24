import UserInfo from "@/app/components/UserInfo";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
import { cookies } from "next/headers";

export default async function Orders() {
  const session = await getServerSession({ ...authOptions });
  const cookieStore = cookies();
  const theme = cookieStore.get("_id")?.value;
  // console.log("session", session);

  // console.log("theme", theme);
  return (
    <>
      <UserInfo session={session} />
    </>
  );
}
