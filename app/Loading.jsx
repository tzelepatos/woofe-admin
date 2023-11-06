import { Icons } from "@/components/ui/icons";
export default function Loading() {
  return (
    <div className="flex justify-center items-center  h-full flex-col bg-red-500">
      ALL APP
      <Icons.pawn className="mr-2 h-16 w-16 animate-spin text-jimOrange" />
    </div>
  );
}
