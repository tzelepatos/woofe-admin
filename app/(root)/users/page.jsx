//components
import CardViewUser from "app/components/users/CardViewUser";
import PaginationUser from "app/components/users/PaginationUser";
import { fetchUsers } from "app/actions/users/fetchUsers";
import SearchBar from "@/app/components/SearchBar";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import Modal from "@/app/components/users/Modal";
//imports
import Link from "next/link";
import { redirect } from "next/navigation";
import { UserForm } from "@/app/components/users/UserForm";
import { cookies } from "next/headers";

export default async function UserPage({ searchParams }) {
  const showModalNewUser = searchParams?.createUser;
  const showModalEditUser = searchParams?.editUser;

  const query = searchParams?.query || "";
  const page = searchParams.page || 1;
  const postPerPage = searchParams.postPerPage || 10;
  const startIndex = (page - 1) * postPerPage;
  const { count, users } = await fetchUsers(query, page, postPerPage);
  const usersPlainObject = JSON.parse(JSON.stringify(users));

  // console.log("postperpage", postPerPage);

  if (query && page === 1) {
    // Only redirect if showModal is false
    if (!showModalNewUser && !showModalEditUser) {
      redirect(`/users?page=${page}&postPerPage=${postPerPage}&query=${query}`);
    }
  }
  if (page === 1) {
    // Only redirect if showModal is false
    if (!showModalNewUser && !showModalEditUser) {
      redirect(`/users?page=${page}&postPerPage=${postPerPage}`);
    }
  }

  const cookieStore = cookies();
  const cookieId = cookieStore.get("user");

  return (
    <div>
      <>
        <Link
          href={`/users?page=${page}&postPerPage=${postPerPage}&createUser=true`}
        >
          <Button variant="signIn" size="addNewProduct" type="button">
            <Icons.add className=" w-6" />
            Add New User
          </Button>
        </Link>
        {showModalNewUser && (
          <Modal>
            <UserForm />
          </Modal>
        )}
      </>
      <PaginationUser count={count} page={page} postPerPage={postPerPage} />
      <div className="flex sm:justify-end py-2 pr-2 justify-center ">
        <SearchBar />
      </div>
      <CardViewUser
        users={usersPlainObject}
        startIndex={startIndex}
        showModalEditUser={showModalEditUser}
        page={page}
        postPerPage={postPerPage}
        cookieId={cookieId}
      />
    </div>
  );
}
