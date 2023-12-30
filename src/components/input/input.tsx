export const Input = () => (
    <fieldset className="w-full space-y-1 text-gray-100">
        <label htmlFor="name" className="block text-sm font-medium">
            Feature name
        </label>
        <div className="flex">
            <input
                type="text"
                name="name"
                id="name"
                className="flex flex-1 border sm:text-sm rounded-r-md focus:ri border-gray-700 text-gray-100 focus:ri"
            />
        </div>
    </fieldset>
);
