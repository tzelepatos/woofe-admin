"use client";
import { useFormStatus } from "react-dom";
//components
import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";

export function SubmitButton({ type }) {
  const { pending } = useFormStatus();

  return (
    <Button
      className="justify-self-end"
      variant="signIn"
      size="create"
      type="submit"
      //   disabled={isLoading}
      aria-disabled={pending}
    >
      {pending && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
      {type === "create" ? "Create" : "Update"}
    </Button>
  );
}
