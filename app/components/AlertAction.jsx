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
import { Icons } from "@/components/ui/icons";

export default function AlertAction({
  actionType,
  productId,
  deleteProduct,
  isLoading,
}) {
  console.log("alert loadinmg ", isLoading);
  const handleDelete = () => {
    if (actionType === "delete") {
      deleteProduct(productId);
    }
  };

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
        {actionType === "delete" ? (
          <Button variant="logIn" size="icon2" type="button">
            <Icons.delete className=" h-4 w-4 text-red-600 fill-background" />
            {/* {action.buttonText} */}
          </Button>
        ) : (
          <Button
            className="bg-jimOrange"
            variant="signIn"
            size="create"
            disabled={isLoading}
          >
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            {action.buttonText}
          </Button>
        )}
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
            onClick={handleDelete}
          >
            {action.buttonText}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
