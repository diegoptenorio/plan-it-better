import { TButton } from './type';

export const Button = ({ value }: TButton) => (
    <button
        type="button"
        className="px-8 py-3 font-semibold rounded bg-gray-100 text-gray-800"
    >
        {value}
    </button>
);
