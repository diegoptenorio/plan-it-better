import { Button, Fieldset, Label } from '@components';
import { useInputList } from './hooks';
import { IInputList } from './types';
import Input from '../input';

export const InputList = () => {
    const { disabledAddButton, addTaskInput, inputList } = useInputList();
    return (
        <>
            {inputList.map((element: IInputList) => {
                const { action, id, label, placeholder, value } = element;
                return (
                    <Fieldset key={id}>
                        {label && (
                            <Label label={label} htmlFor={`name-${id}`} />
                        )}
                        <Input id={id} placeholder={placeholder} value={value}>
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
