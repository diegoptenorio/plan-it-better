import { useState } from 'react';
import { IInputList } from './types';

export const useInputList = () => {
    const [inputList, setInputList] = useState([
        {
            id: 0,
            label: 'What is the name of the feature?',
            placeholder: 'Ex: Task 1',
            remove: false,
            value: '',
        },
    ]);
    const [disabledAddButton, setDisabledAddButton] = useState(false);

    const handleTeste = () => {
        if (inputList.length < 3) {
            const lastTeste = inputList[inputList.length - 1];
            setInputList((previous: IInputList[]) => {
                return previous
                    ? [
                          ...previous,
                          {
                              id: lastTeste.id + 1,
                              label: '',
                              placeholder: `Ex: Task ${lastTeste.id + 2}`,
                              remove: true,
                              value: '',
                          },
                      ]
                    : [
                          {
                              id: lastTeste.id + 1,
                              label: '',
                              placeholder: `Ex: Task ${lastTeste.id + 2}`,
                              remove: true,
                              value: '',
                          },
                      ];
            });
            if (inputList.length === 2) {
                setDisabledAddButton(true);
            }
        }
    };

    return {
        disabledAddButton,
        handleTeste,
        inputList,
    };
};
