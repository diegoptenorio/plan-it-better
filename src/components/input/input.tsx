import { TInput } from './types';

export const Input = ({ id, label, placeholder, remove, value }: TInput) => (
    <fieldset className="w-full space-y-1 mb-5">
        {label && (
            <label htmlFor="name" className="block value-sm">
                {label}
            </label>
        )}
        <div className="relative flex">
            {remove && (
                <span className="absolute inset-y-0 right-1 flex items-center pl-2">
                    <button
                        type="button"
                        title="remove"
                        className="p-1 focus:outline-none focus:ring"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#0ea5e9"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="feather feather-x"
                        >
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </span>
            )}
            <input
                type="value"
                name="name"
                id={`name-${id}`}
                className="
                    flex
                    flex-1
                    border
                    sm:value-sm
                    rounded focus:ri
                    border-gray-300
                    value-gray-500
                    focus:ri p-3"
                placeholder={placeholder}
                value={value}
            />
        </div>
    </fieldset>
);
