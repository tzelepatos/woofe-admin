"use client";
import { Button } from "@/components/ui/button";
import { useCallback } from "react";
import { useRouter } from "next/navigation";

export function CloseButtonModal() {
  const router = useRouter();
  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);
  return (
    <Button
      type="button"
      variant="signIn"
      size="cancel"
      className="text-sm sm:text-base bg-red-500 "
      onClick={onDismiss}
    >
      Close
    </Button>
  );
}

export default CloseButtonModal;
