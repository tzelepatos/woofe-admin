"use client";
import { useState } from "react";
import * as React from "react";
import Image from "next/image";
import avatar from "@/assets/images/AVATAR.svg"; // Import the avatar image directly
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Icons } from "@/components/ui/icons";
import AlertAction from "@/app/components/AlertAction";
import { deleteUser } from "@/app/actions/users/actions";
import { useRouter } from "next/navigation";
import Modal from "@/app/components/users/Modal";
import { UserForm } from "@/app/components/users/UserForm";
import {
  showDeletedSuccesfullToastUser,
  showDeletedFailToastUser,
} from "@/app/components/ToastersCustom";
import { getUserImage } from "@/app/components/users/ActionsUser";
import { useSession } from "next-auth/react";
import ProductsByUser from "@/app/components/users/ProductsByUser";

export default function CardViewUser({
  users,
  startIndex,
  showModalEditUser,
  page,
  postPerPage,
  cookieId,
  showModalProductsByUser,
}) {
  const { data: session } = useSession();

  const [deleting, setDeleting] = useState(false);
  const router = useRouter();
  const [editingUser, setEditingUser] = useState(null);

  // console.log("session", session);

  // const handleDelete = async (id) => {
  //   setDeleting(true);
  //   const result = await deleteUser(id);
  //   setDeleting(false);

  //   if (result.success) {
  //     showDeletedSuccesfullToastUser(id);
  //     router.refresh();
  //   } else if (result.error) {
  //     showDeletedFailToastUser(result.error);
  //   }
  // };
  // console.log("cookieId", cookieId);

  return (
    <div className="pt-4 grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4 gap-8">
      {users.map((user, index) => (
        <div
          key={user._id}
          className=" relative container flex items-center p-4 gap-2 mb-4  bg-jimGrayLight  text-foreground max-w-md border border-accent rounded-2xl shadow-md hover:border-jimGray hover:shadow-lg" // Added margin-bottom (mb-4)
        >
          {/* if cookieId === user._id */}
          <p className="absolute left-2 top-1 text-xs flex gap-1">
            {cookieId.value === user._id && (
              <>
                <Icons.dot className="text-green-500 w-3" />
                Online
              </>
            )}
          </p>
          {/* <p className="absolute left-2 top-0 h-5 w-5 text-xs">
            {startIndex + index + 1}
          </p> */}
          <div className=" ">
            <Image
              className="rounded-full shadow-xl border-2 border-background "
              src={
                user.provider === "credentials"
                  ? getUserImage(user.image)
                  : user.image
              }
              width={120}
              height={120}
              alt={"User avatar"}
              priority
            />
          </div>

          <div className=" w-full ">
            {/* username + buttons */}
            <div className="text-lg flex items-center justify-between ">
              <div className="text-xs sm:text-base font-bold">
                {user.name || "Update your name"}
              </div>
              <div className="flex space-x-2 ">
                {/* products */}
                <div>
                  <Link
                    href={
                      `/users?page=${page}&postPerPage=${postPerPage}&productsByUser=true?` +
                      user._id
                    }
                    key={user._id}
                  >
                    <span title="Products">
                      <Button
                        key={index}
                        className=""
                        variant="logIn"
                        size="icon2"
                        type="button"
                        onClick={() => setEditingUser(user._id)}
                      >
                        <Icons.product
                          className=" h-4 w-4 "
                          style={{ opacity: 0.5 }}
                        />
                      </Button>
                    </span>
                  </Link>
                  {showModalProductsByUser && editingUser === user._id && (
                    <Modal>
                      <ProductsByUser edit={true} user={user} />
                    </Modal>
                  )}
                </div>
                {/* link + modal */}
                <div>
                  <Link
                    href={
                      `/users?page=${page}&postPerPage=${postPerPage}&editUser=true?` +
                      user._id
                    }
                    key={user._id}
                  >
                    <span title="Edit">
                      <Button
                        key={index}
                        className=""
                        variant="logIn"
                        size="icon2"
                        type="button"
                        onClick={() => setEditingUser(user._id)}
                      >
                        <Icons.edit className=" h-4 w-4" />
                      </Button>
                    </span>
                  </Link>
                  {showModalEditUser && editingUser === user._id && (
                    <Modal>
                      <UserForm edit={true} user={user} />
                    </Modal>
                  )}
                </div>

                <AlertAction
                  actionType="delete"
                  userId={user._id}
                  // deleteUser={handleDelete}
                />
              </div>
            </div>
            <div className=" text-xs sm:text-base">
              {user.email || "No email provided"}
            </div>
            <div className="text-sm flex items-center justify-between ">
              <div className="capitalize">{user.role}</div>
              <div className="text-xs sm:text-base">
                {user.phone || "No phone"}
              </div>
            </div>
            <div className="flex items-center justify-between ">
              {" "}
              <div className="capitalize text-xs sm:text-base">
                {user.provider}
              </div>
              <div className="text-xs sm:text-base">
                {new Date(user.updatedAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
