export const Input = () => (
    <fieldset className="w-full space-y-1 mb-5">
        <label htmlFor="name" className="block text-sm">
            What is the name of the feature?
        </label>
        <div className="flex">
            <input
                type="text"
                name="name"
                id="name"
                className="
                    flex
                    flex-1
                    border
                    sm:text-sm
                    rounded focus:ri
                    border-gray-300
                    text-gray-500
                    focus:ri p-3"
            />
        </div>
    </fieldset>
);
