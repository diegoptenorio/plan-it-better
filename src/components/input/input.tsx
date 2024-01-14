'use client';

import { FC, ReactNode } from 'react';

type Tasks = {
    action?: any;
    id: number;
    label?: string;
    placeholder?: string;
    value: string;
};

type Input = {
    children?: ReactNode;
    id: number;
    update: any;
    placeholder?: string;
    tasks: Tasks[];
};

type InputComposition = {
    Button?: any;
    Label?: any;
};

export const Input: FC<Input> & InputComposition = ({
    children,
    id,
    update,
    placeholder,
    tasks,
}) => {
    const updateTaskName = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newTasks = tasks;
        newTasks[id].value = e.target.value;
        update(newTasks);
    };
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
                onChange={(e) => updateTaskName(e)}
                placeholder={placeholder}
                value={tasks[id]?.value}
            />
        </div>
    );
};
