import { create } from 'zustand';
import CONSTANTS from '../constants/constants';

type InputList = {
    action?: any;
    id: number;
    label?: string;
    placeholder?: string;
    value: string;
};

type TaskState = {
    tasks: InputList[];
    update: (taskName: InputList[]) => void;
};

const useStore = create<TaskState>()((set) => ({
    tasks: [
        {
            id: 0,
            label: CONSTANTS.DEFAULT_LABEL,
            placeholder: `${CONSTANTS.PLACEHOLDER_BASE} 1`,
            value: '',
        },
    ],
    update: (tasks) => set({ tasks }),
}));

export default useStore;
