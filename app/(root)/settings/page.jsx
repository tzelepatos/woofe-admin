import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route.jsx";

export default async function Settings() {
  const session = await getServerSession(authOptions);

  return (
    <section>
      <h1 className="text-jimOrange pb-2">Settings</h1>
      <h3>Server Side Rendered</h3>
      {/* //add an empty line here */}

      <div className="overflow-x-auto">
        <pre className="whitespace-pre-wrap">{JSON.stringify(session)}</pre>
      </div>
      <h1>Client Side Rendered</h1>
    </section>
  );
}
