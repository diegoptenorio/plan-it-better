import { TLabel } from './types';

export const Label = ({ htmlFor, label }: TLabel) => (
    <label htmlFor={htmlFor} className="block value-sm">
        {label}
    </label>
);
