//compoments
import { UserForm } from "@/app/components/users/UserForm";
import Modal from "@/app/components/users/Modal";

export default function NewUser() {
  return (
    <Modal>
      <UserForm inModal />
    </Modal>
  );
}
