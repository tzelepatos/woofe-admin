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
    <Button variant="destructive" size="lg" type="button" onClick={onDismiss}>
      Close
    </Button>
  );
}

export default CloseButtonModal;
