import { useState } from 'react';
import { IInputList } from './types';

const BUSINESS = {
    DEFAULT_LABEL: 'What is the name of the task?',
    PLACEHOLDER_BASE: 'Ex: Task',
    MAX_INPUT_QUANTITY: 2,
};

export const useInputList = () => {
    const [inputList, setInputList] = useState([
        {
            id: 0,
            label: BUSINESS.DEFAULT_LABEL,
            placeholder: `${BUSINESS.PLACEHOLDER_BASE} 1`,
            value: '',
        },
    ]);
    const [disabledAddButton, setDisabledAddButton] = useState(false);

    const addTaskInput = () => {
        if (inputList.length <= BUSINESS.MAX_INPUT_QUANTITY) {
            const lastTeste = inputList[inputList.length - 1];
            setInputList((previous: IInputList[]) => {
                return previous
                    ? [
                          ...previous,
                          {
                              id: lastTeste.id + 1,
                              label: '',
                              placeholder: `${BUSINESS.PLACEHOLDER_BASE} ${
                                  lastTeste.id + 2
                              }`,
                              action: () => alert('oi'),
                              value: '',
                          },
                      ]
                    : [
                          {
                              id: lastTeste.id + 1,
                              label: '',
                              placeholder: `${BUSINESS.PLACEHOLDER_BASE} ${
                                  lastTeste.id + 2
                              }`,
                              action: () => alert('oi'),
                              value: '',
                          },
                      ];
            });
            if (inputList.length === BUSINESS.MAX_INPUT_QUANTITY) {
                setDisabledAddButton(true);
            }
        }
    };

    return {
        disabledAddButton,
        addTaskInput,
        inputList,
    };
};
