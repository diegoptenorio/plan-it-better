export const Input = () => (
    <fieldset className="w-full space-y-1 dark:text-gray-100">
	    <label htmlFor="name" className="block text-sm font-medium">
            Feature name
        </label>
	    <div className="flex">
		    <input type="text" name="name" id="name" className="flex flex-1 border sm:text-sm rounded-r-md focus:ri dark:border-gray-700 dark:text-gray-100 dark:bg-gray-800 focus:ri" />
	    </div>
    </fieldset>
)