'use client';

import { FC } from 'react';
import useStore from '../../hooks/useStore';
import { TInput, TInputComposition } from './types';

export const Input: FC<TInput> & TInputComposition = ({
    children,
    id,
    placeholder,
}) => {
    const { taskName, update } = useStore();
    return (
        <div className="relative flex">
            {children}
            <input
                autoComplete="off"
                type="value"
                name={`name-${id}`}
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
                onChange={(e) => update(e.target.value)}
                placeholder={placeholder}
                value={taskName}
            />
        </div>
    );
};
