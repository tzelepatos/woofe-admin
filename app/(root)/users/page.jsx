//components
import CardViewUser from "app/components/users/CardViewUser";
import PaginationUser from "app/components/users/PaginationUser";
import { fetchUsers } from "app/lib/fetchUsers";
import SearchBar from "@/app/components/SearchBar";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
//imports
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function UserPage({ searchParams }) {
  const query = searchParams?.query || "";
  const page = searchParams.page || 1;
  const postPerPage = searchParams.postPerPage || 10;
  const startIndex = (page - 1) * postPerPage;
  const { count, users } = await fetchUsers(query, page, postPerPage);
  const usersPlainObject = JSON.parse(JSON.stringify(users));

  if (query && page === 1) {
    redirect(`/users?page=${page}&postPerPage=${postPerPage}&query=${query}`);
  }
  if (page === 1) {
    redirect(`/users?page=${page}&postPerPage=${postPerPage}`);
  }
  return (
    <div>
      {/* add new product */}

      <Link href={"/users/newuser"}>
        <Button variant="signIn" size="addNewProduct" type="button">
          <Icons.add className=" w-6" />
          Add New User
        </Button>
      </Link>
      <PaginationUser count={count} page={page} postPerPage={postPerPage} />
      <div className="flex sm:justify-end py-2 pr-2 justify-center ">
        <SearchBar />
      </div>
      <CardViewUser users={usersPlainObject} startIndex={startIndex} />
    </div>
  );
}
