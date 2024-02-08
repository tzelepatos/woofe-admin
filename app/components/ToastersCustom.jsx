import React from "react";
import { toast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { Icons } from "@/components/ui/icons";

export const showUpdateToast = (data) => {
  toast({
    action: (
      <ToastAction altText="update">
        <Icons.update className=" h-5 w-5 font-bold" />
      </ToastAction>
    ),
    variant: "update",
    title: "Product updated.",
    description: `The product "${data.productName}" has been updated successfully.`,
  });
};

export const showSuccessToast = (data) => {
  toast({
    action: (
      <ToastAction altText="success">
        <Icons.success className=" h-5 w-5 font-bold" />
      </ToastAction>
    ),
    variant: "success",
    title: "Product created.",
    description: `The product "${data.productName}" has been created successfully.`,
  });
};

export const showFailToast = (error) => {
  toast({
    action: (
      <ToastAction altText="destructive">
        <Icons.failed className=" h-5 w-5 font-bold" />
      </ToastAction>
    ),
    variant: "destructive",
    title: "Something happened...",
    description: `Error:  "${error}" .`,
  });
};

export const showDeletedSuccesfullToast = (product) => {
  toast({
    action: (
      <ToastAction altText="success">
        <Icons.success className=" h-5 w-5 font-bold" />
      </ToastAction>
    ),
    variant: "success",
    title: "Product deleted.",
    description: `The product "${product.productName}" has been deleted successfully.`,
  });
};

export const showDeletedFailToast = (error) => {
  toast({
    action: (
      <ToastAction altText="destructive">
        <Icons.failed className=" h-5 w-5 font-bold" />
      </ToastAction>
    ),
    variant: "destructive",
    title: "Something happened...",
    description: `Error:  "${error}" .`,
  });
};
export const showDeletedSuccesfullImageToast = (link) => {
  const cleanFilename = link.split("/").pop().replace(/^\d+/, "");
  const maskedLink = cleanFilename.replace(/\d/g, "*");
  toast({
    action: (
      <ToastAction altText="success">
        <Icons.success className=" h-5 w-5 font-bold" />
      </ToastAction>
    ),
    variant: "success",
    title: "Image deleted.",
    description: `Image "${maskedLink}" has been deleted successfully.`,
  });
};
export const showDeletedFailImageToast = (error) => {
  toast({
    action: (
      <ToastAction altText="destructive">
        <Icons.failed className=" h-5 w-5 font-bold" />
      </ToastAction>
    ),
    variant: "destructive",
    title: "Something happened...",
    description: `Error:  "${error}" .`,
  });
};

export const showSuccessToastEmail = () => {
  toast({
    action: (
      <ToastAction altText="success">
        <Icons.success className=" h-5 w-5 font-bold" />
      </ToastAction>
    ),
    variant: "success",
    title: "Email sent.",
    description: `Your email has been sent successfully.`,
  });
};
export const showFailToastEmail = (error) => {
  toast({
    action: (
      <ToastAction altText="destructive">
        <Icons.failed className=" h-5 w-5 font-bold" />
      </ToastAction>
    ),
    variant: "destructive",
    title: "Something happened...",
    description: `Error:  "${error}" .`,
  });
};
export const showSuccessToastLogin = (data) => {
  toast({
    action: (
      <ToastAction altText="success">
        <Icons.success className=" h-5 w-5 font-bold" />
      </ToastAction>
    ),
    variant: "success",
    title: "Login Success.",
    description: `Wellcome "${data}" `,
  });
};
export const showFailUserNamePassword = (error) => {
  toast({
    action: (
      <ToastAction altText="destructive">
        <Icons.failed className=" h-5 w-5 font-bold" />
      </ToastAction>
    ),
    variant: "destructive",
    title: `  "${error}" `,
  });
};
export const showSuccessToastSignUp = (userInfo) => {
  toast({
    action: (
      <ToastAction altText="success">
        <Icons.success className=" h-5 w-5 font-bold" />
      </ToastAction>
    ),
    variant: "success",
    title: "User created.",
    description: `User "${userInfo.email}" has been created successfully.`,
  });
};

export const showDeletedSuccesfullToastUser = (id) => {
  toast({
    action: (
      <ToastAction altText="success">
        <Icons.success className=" h-5 w-5 font-bold" />
      </ToastAction>
    ),
    variant: "success",
    title: "User deleted.",
    description: `The User "${id}" has been deleted successfully.`,
  });
};

export const showDeletedFailToastUser = (error) => {
  toast({
    action: (
      <ToastAction altText="destructive">
        <Icons.failed className=" h-5 w-5 font-bold" />
      </ToastAction>
    ),
    variant: "destructive",
    title: "Something happened...",
    description: `Error:  "${error}" .`,
  });
};

export const showSuccesfullToastUserUpdate = (id) => {
  toast({
    action: (
      <ToastAction altText="update">
        <Icons.update className=" h-5 w-5 font-bold" />
      </ToastAction>
    ),
    variant: "update",
    title: "User updated.",
    description: `The User "${id}" has been updated successfully.`,
  });
};

export const showSuccesfullToastUserAdd = (name) => {
  toast({
    action: (
      <ToastAction altText="success">
        <Icons.success className=" h-5 w-5 font-bold" />
      </ToastAction>
    ),
    variant: "success",
    title: "User created.",
    description: `The User "${name}" has been created successfully.`,
  });
};
export const showLargeFileUploadError = () => {
  toast({
    action: (
      <ToastAction altText="destructive">
        <Icons.failed className=" h-5 w-5 font-bold" />
      </ToastAction>
    ),
    variant: "destructive",
    title: "Image upload error.",
    description: `File is too large. Please upload a file smaller than 2MB"`,
  });
};
