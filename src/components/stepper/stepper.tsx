type Stepper = {
    label: string;
};

export const Stepper = ({ label }: Stepper) => (
    <div className="space-y-2 text-gray-600 w-full mb-10">
        <h3 className="text-base font-semibold text-sm">{label}</h3>
        <div className="flex space-x-3">
            <span className="w-12 grow h-2 rounded-sm bg-blue-500"></span>
            <span className="w-12 grow h-2 rounded-sm bg-gray-300"></span>
            <span className="w-12 grow h-2 rounded-sm bg-gray-300"></span>
        </div>
    </div>
);
