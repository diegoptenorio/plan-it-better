'use client';

import { Button, Fieldset, Input, Label } from '@components';
import { useInputList } from './hooks';

type InputList = {
    action?: any;
    id: number;
    label?: string;
    placeholder?: string;
    value: string;
};

export const InputList = () => {
    const { addTaskInput, disabledAddButton, update, tasks } = useInputList();
    return (
        <>
            {tasks.map((element: InputList) => {
                const { action, id, label, placeholder } = element;
                return (
                    <Fieldset key={id}>
                        {label && (
                            <Label label={label} htmlFor={`name-${id}`} />
                        )}
                        <Input
                            id={id}
                            placeholder={placeholder}
                            update={update}
                            tasks={tasks}
                        >
                            {action && <Input.Button onClick={action} />}
                        </Input>
                    </Fieldset>
                );
            })}
            <div className="flex flex-col items-end w-full mb-10">
                <Button
                    disabled={disabledAddButton}
                    value="Add feature"
                    onClick={() => addTaskInput()}
                    size="sm"
                    style="lined"
                />
            </div>
        </>
    );
};
