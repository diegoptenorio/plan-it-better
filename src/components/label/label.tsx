type Label = {
    htmlFor?: string;
    label?: string;
};

export const Label = ({ htmlFor, label }: Label) => (
    <label htmlFor={htmlFor} className="block value-sm">
        {label}
    </label>
);
