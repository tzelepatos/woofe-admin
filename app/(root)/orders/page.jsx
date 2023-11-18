import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import Link from "next/link";

export default function Orders() {
  return (
    <>
   Orders
   <Link href="/users/newuser">
        <Button variant="signIn" size="addNewProduct" type="button">
          <Icons.add className=" w-6" />
          Add New User
        </Button>
      </Link>
    </>
  );
}
