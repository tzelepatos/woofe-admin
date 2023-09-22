function SaveButton({ onSubmit }) {
  return (
    <button
      type="submit"
      className="text-white bg-jimOrange p-2 px-5 rounded-md hover:bg-orange-500 active:bg-orange-700 focus:outline-none focus:ring focus:ring-orange-300"
    >
      Save
    </button>
  );
}

export default SaveButton;
