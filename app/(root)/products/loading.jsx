import { Icons } from "@/components/ui/icons";
export default function Loading() {
  return (
    <div className="flex justify-center items-center  h-1/2 flex-col ">
      <Icons.pawn className="mr-2 h-16 w-16 animate-spin text-jimOrange" />
    </div>
  );
}
