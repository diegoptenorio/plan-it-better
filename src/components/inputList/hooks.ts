import { useState } from 'react';
import useStore from '../../hooks/useStore';
import CONSTANTS from '../../constants';

export const useInputList = () => {
    const { tasks, update } = useStore();

    const [disabledAddButton, setDisabledAddButton] = useState(false);

    const removeInput = () => {
        const newTasks = tasks;
        newTasks.pop();
        if (newTasks.length > 1) {
            const lastInput = newTasks[newTasks.length - 1];
            lastInput.action = () => removeInput();
        }
        update(newTasks);
        setDisabledAddButton(false);
    };

    const mountNewInputList = () => {
        const lastInput = tasks[tasks.length - 1];
        const newInput = {
            action: () => removeInput(),
            id: lastInput.id + 1,
            label: '',
            placeholder: `${CONSTANTS.PLACEHOLDER_BASE} ${lastInput.id + 2}`,
            value: '',
        };
        const newInputList = tasks;
        newInputList[newInputList.length - 1].action = null;
        newInputList.push(newInput);
        return newInputList;
    };

    const addTaskInput = () => {
        const isLimitAllowed = tasks.length <= CONSTANTS.MAX_INPUT_QUANTITY;
        if (isLimitAllowed) {
            const newInputList = mountNewInputList();
            update(newInputList);
            const isLimit = tasks.length === CONSTANTS.MAX_INPUT_QUANTITY;
            if (isLimit) {
                setDisabledAddButton(true);
            }
        }
    };

    return {
        addTaskInput,
        disabledAddButton,
        update,
        tasks,
    };
};
