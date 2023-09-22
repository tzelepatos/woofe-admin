import { signIn } from "next-auth/react";

async function handleLoginButtonClick(event) {
  event.stopPropagation();
  event.preventDefault();
  await signIn("google", { callbackUrl: "/home" }); //?????
}

function SighInButtonGoogle() {
  return (
    <button
      onClick={handleLoginButtonClick}
      className="text-white bg-jimOrange p-2 px-5 rounded-md hover:bg-orange-500 active:bg-orange-600 focus:outline-none focus:ring focus:ring-orange-300"
    >
      Login via Google
    </button>
  );
}

export default SighInButtonGoogle;
