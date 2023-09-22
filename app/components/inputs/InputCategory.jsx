//w-full all screen

const InputCategory = ({ description, setDescription }) => {
  return (
    <label>
      <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
        New Category
      </span>
      <input
        className="resize w-1/2 mb-2 mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:orange-orange-500 focus:ring-orange-500 block rounded-md sm:text-sm focus:ring-1"
        placeholder="enter new category"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
    </label>
  );
};

export default InputCategory;
