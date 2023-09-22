//w-full all screen

const InputPrice = ({ price, setPrice }) => {
  return (
    <label>
      <span className=" after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
        Price
      </span>
      <input
        type="number"
        step="0.01" // Set step for decimal input
        className="w-1/2 mb-2 mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:orange-orange-500 focus:ring-orange-500 block  rounded-md sm:text-sm focus:ring-1"
        placeholder="ex. 38.22&#8364; "
        value={price}
        onChange={(event) => setPrice(event.target.value)}
      />
    </label>
  );
};
export default InputPrice;
