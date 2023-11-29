"use client";
import { useState } from "react";
import React from "react";
import { addUser, updateUser } from "@/app/actions/users/actions";

//shadcn
import { Icons } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { SubmitButton } from "@/app/components/users/SubmitButton";
import { CloseButtonModal } from "@/app/components/users/CloseButtonModal";
import { UserImage } from "./UserImage";
import {
  showSuccesfullToastUserUpdate,
  showDeletedFailToastUser,
  showSuccesfullToastUserAdd,
} from "@/app/components/ToastersCustom";
import { useRouter } from "next/navigation";

export const UserForm = ({ edit, user, userRole }) => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [role, setRole] = useState("");
  // console.log("user", user);
  // console.log("name", name);
  // console.log("image", image);
  // console.log("role", role);

  async function submitAction(formData) {
    let result;
    if (edit) {
      result = await updateUser(formData);
    } else {
      result = await addUser(formData);
    }

    if (result.success) {
      if (edit) {
        showSuccesfullToastUserUpdate(user._id);
      } else {
        const userName = formData.get("name");
        showSuccesfullToastUserAdd(userName);
      }

      router.back();
    } else if (result.error) {
      showDeletedFailToastUser(result.error);
    }
  }

  return (
    <div>
      <form
        action={submitAction}
        className="max-w-lg  space-y-6  text-background bg-jimGray container border border-accent rounded-2xl p-4 hover:border-jimGray hover:shadow-lg"
      >
        <div className="flex items-center justify-between">
          <h1 className="flex items-center justify-start text-foreground text-lg xl:text-2xl">
            {edit ? "Edit" : "Create a"}&nbsp;
            <strong>{edit ? "Existing" : "New"} User</strong>
            <Icons.users className="ml-2 h-5 w-5" />
          </h1>
          {edit && user.provider !== "credentials" && (
            <Icons.googleLogo></Icons.googleLogo>
          )}
        </div>
        <div className="flex items-center  justify-between  gap-4">
          {/* photo */}

          <UserImage name="image" user={user} edit={edit} setImage={setImage} />

          {/* only for update hidden */}
          <Input
            className="hidden "
            name="id"
            type="text"
            placeholder="id"
            id="id"
            {...(edit && user && { defaultValue: user._id })}
          />

          {/* name */}
          <div className="  space-y-4 w-full ">
            <div className="grid w-full max-w-md items-center gap-1.5 ">
              <Label className="text-foreground font-semibold" htmlFor="name">
                Username
              </Label>
              <Input
                onChange={(e) => setName(e.target.value)}
                className="bg-background text-foreground"
                name="name"
                type="text"
                placeholder="name"
                id="name"
                required
                disabled={edit && user.provider != "credentials"}
                {...(edit && user && { defaultValue: user.name })}
              />
            </div>
            {/* password */}
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label
                htmlFor="password"
                className="text-foreground font-semibold"
              >
                Password
              </Label>
              <Input
                className="bg-background text-foreground"
                type="password"
                placeholder="password"
                name="password"
                required
                disabled={edit && user.provider != "credentials"}
                {...(edit && user && { defaultValue: user.password })}
              />
            </div>
          </div>
        </div>

        <div className="flex gap-4 items-center justify-between ">
          {/* email */}
          <div className="grid w-full max-w-sm items-center gap-1.5 ">
            <Label htmlFor="email" className="text-foreground font-semibold">
              Email
            </Label>
            <Input
              className="bg-background text-foreground"
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
              disabled={
                (edit && user.provider != "credentials") || userRole === "user"
              }
              {...(edit && user && { defaultValue: user.email })}
            />
          </div>

          {/* role */}
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Select
              disabled={userRole === "user"}
              onValueChange={setRole}
              name="role"
              id="role"
              defaultValue="user"
              {...(edit && user && { defaultValue: user.role })}
            >
              <Label htmlFor="role" className="text-foreground  font-semibold">
                Role
              </Label>
              <SelectTrigger className=" bg-background text-foreground">
                <SelectValue placeholder="Role" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Role</SelectLabel>
                  <SelectItem value="admin">Admin</SelectItem>
                  <SelectItem value="user">User</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex gap-4 items-center justify-between ">
          {/* phone */}
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="phone" className="text-foreground font-semibold">
              Phone number
            </Label>
            <Input
              type="number"
              placeholder="phone"
              name="phone"
              className="bg-background text-foreground"
              {...(edit && user && { defaultValue: user.phone })}
            />
          </div>
          {/* address */}
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label
              htmlFor="addressLabel"
              className="text-foreground font-semibold"
            >
              Address
            </Label>
            <Input
              className="bg-background text-foreground"
              name="address"
              id="address"
              placeholder="Address"
              {...(edit && user && { defaultValue: user.address })}
            ></Input>
          </div>
        </div>
        {/* userInfo */}
        <div className="grid w-full  items-center gap-1.5">
          <Label htmlFor="userInfo" className="text-foreground font-semibold">
            User info
          </Label>
          <Textarea
            className="bg-background text-foreground resize-none"
            name="userInfo"
            id="userInfo"
            rows={3}
            placeholder="Info"
            {...(edit && user && { defaultValue: user.info })}
          ></Textarea>
        </div>
        <div className="flex items-center justify-between">
          <SubmitButton
            type={edit ? "edit" : "create"}
            name={name}
            image={image}
            role={role}
            user={user}
          />
          <CloseButtonModal />
        </div>
      </form>
    </div>
  );
};
