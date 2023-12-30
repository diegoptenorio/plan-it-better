import { TButton } from "./type";

export const Button = ({ value }: TButton) => (
  <button
    type="button"
    className="px-8 py-3 font-semibold rounded dark:bg-gray-100 dark:text-gray-800"
  >
    {value}
  </button>
);
