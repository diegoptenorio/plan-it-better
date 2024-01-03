import { Button, Input } from '@components';
import { useInputList } from './hooks';

export const InputList = () => {
    const { disabledAddButton, handleTeste, inputList } = useInputList();
    return (
        <>
            {inputList.map((element) => (
                <Input
                    id={element.id}
                    key={element.id}
                    label={element.label}
                    placeholder={element.placeholder}
                    remove={element.remove}
                    value={element.value}
                />
            ))}
            <div className="flex flex-col items-end w-full mb-10">
                <Button
                    disabled={disabledAddButton}
                    value="Add feature"
                    onClick={() => handleTeste()}
                    size="sm"
                    style="lined"
                />
            </div>
        </>
    );
};
