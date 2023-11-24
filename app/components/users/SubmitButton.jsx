"use client";
import { useFormStatus } from "react-dom";
import { useSession } from "next-auth/react";
//components
import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";

export function SubmitButton({ type, name, image, role, user }) {
  const { pending } = useFormStatus();
  const { data: session, update } = useSession();

  // console.log("session user", session.user.id);
  // console.log("user", user._id);

  return (
    <Button
      className="justify-self-end"
      variant="signIn"
      size="create"
      type="submit"
      aria-disabled={pending}
      onClick={() => {
        if (session.user.id === user?._id) {
          update({ name, image, role });
        } else {
          console.log("Error: User ID does not match session ID");
        }
      }}
    >
      {pending && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
      {type === "create" ? "Create" : "Update"}
    </Button>
  );
}
