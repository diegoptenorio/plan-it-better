import { TStepper } from './type'

export const Stepper = ({ label }: TStepper) => (
    <div className="p-4 space-y-2 dark:bg-gray-800 dark:text-gray-100">
        <h3 className="text-base font-semibold">
            {label}
        </h3>
        <div className="flex max-w-xs space-x-3">
            <span className="w-12 h-2 rounded-sm dark:bg-violet-400"></span>
            <span className="w-12 h-2 rounded-sm dark:bg-violet-400"></span>
            <span className="w-12 h-2 rounded-sm dark:bg-gray-100"></span>
        </div>
    </div>
)