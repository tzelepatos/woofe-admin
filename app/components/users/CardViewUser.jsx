"use client";
import { useState } from "react";
import * as React from "react";
import Image from "next/image";
import avatar from "@/assets/images/AVATAR.svg"; // Import the avatar image directly
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Icons } from "@/components/ui/icons";
import AlertAction from "@/app/components/AlertAction";
import { deleteUser } from "@/app/lib/actions";
import {
  showDeletedSuccesfullToastUser,
  showDeletedFailToastUser,
} from "@/app/components/ToastersCustom";

export default function CardViewUser({ users, startIndex }) {
  const [deleting, setDeleting] = useState(false);

  const handleDelete = async (id) => {
    setDeleting(true);
    const result = await deleteUser(id);
    setDeleting(false);

    if (result.success) {
      showDeletedSuccesfullToastUser(id);
    } else if (result.error) {
      showDeletedFailToastUser(result.error);
    }
  };

  return (
    <div className="pt-4 grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4 gap-8">
      {users.map((user, index) => (
        <div
          key={index}
          className="relative container flex items-center p-2 gap-2 mb-4  bg-jimGrayLight  text-foreground max-w-md border border-accent rounded-2xl shadow-md hover:border-jimGray hover:shadow-lg" // Added margin-bottom (mb-4)
        >
          <p className="absolute left-2 top-0 h-5 w-5 text-xs">
            {startIndex + index + 1}
          </p>
          <div className=" ">
            <Image
              className="rounded-full shadow-xl border-2 border-background "
              src={user.image || avatar}
              width={120}
              height={120}
              alt={"User avatar"}
            />
          </div>

          <div className=" w-full ">
            {/* username + buttons */}
            <div className="text-lg flex items-center justify-between ">
              <div className="text-xs sm:text-base font-bold">
                {user.name || "Update your name"}
              </div>
              <div className="flex space-x-2 ">
                {/* <Link href={"/products/edit/" + product._id}> */}
                <span title="Edit">
                  <Button
                    className=""
                    variant="logIn"
                    size="icon2"
                    type="button"
                  >
                    <Icons.edit className=" h-4 w-4" />
                    {/* Edit */}
                  </Button>
                </span>
                {/* </Link> */}

                <AlertAction
                  actionType="delete"
                  userId={user._id}
                  deleteUser={handleDelete}
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
