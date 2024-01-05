import { FC } from 'react';
import { TInput, TInputComposition } from './types';

export const Input: FC<TInput> & TInputComposition = ({
    children,
    id,
    placeholder,
    value,
}) => (
    <div className="relative flex">
        {children}
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
);
