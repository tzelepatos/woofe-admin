"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React from "react";

export default function Alert({}) {
  const [showDeleteConfirmation, setShowDeleteConfirmation] =
    React.useState(false);

  const handleDeleteClick = () => {
    event.stopPropagation();
    setShowDeleteConfirmation(true);
  };

  const handleCancelDelete = () => {
    setShowDeleteConfirmation(false);
  };

  const handleConfirmDelete = () => {
    // Perform the delete action here
    // ...
    setShowDeleteConfirmation(false);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" onClick={handleDeleteClick}>
          Delete Profile
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Delete profile</DialogTitle>
          <DialogDescription>
            {showDeleteConfirmation
              ? "Are you sure you want to delete your profile?"
              : "Make changes to your profile here. Click save when you're done."}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {/* Your existing profile fields */}
        </div>
        <DialogFooter>
          {showDeleteConfirmation ? (
            <>
              <Button variant="outline" onClick={handleCancelDelete}>
                Cancel
              </Button>
              <Button onClick={handleConfirmDelete}>Confirm Delete</Button>
            </>
          ) : (
            <Button variant="solid" type="submit" form="product-form">
              Update
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
