import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { Button } from "@/components/ui/button";

export default function AlertAction({ actionType }) {
  const actions = [
    {
      buttonText: "Delete",
      description:
        "This action cannot be undone. This will permanently delete your product and remove your data from our servers.",
      buttonColor: "bg-red-800",
    },
    {
      buttonText: "Update",
      description:
        "This action cannot be undone. This will permanently update your product.",
      buttonColor: "bg-jimOrange",
    },
  ];
  const action = actionType === "delete" ? actions[0] : actions[1];

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="justify-self-end" variant="signIn" size="create">
          {action.buttonText}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>{action.description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel size="sm">Cancel</AlertDialogCancel>
          <AlertDialogAction
            className={action.buttonColor}
            size="create"
            type="submit"
            form="product-form"
          >
            {action.buttonText}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
