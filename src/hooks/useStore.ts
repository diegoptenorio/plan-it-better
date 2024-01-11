import { create } from 'zustand';

interface TaskState {
    taskName: string;
    update: (taskName: string) => void;
}

const useStore = create<TaskState>()((set) => ({
    taskName: '',
    update: (taskName) => set({ taskName }),
}));

export default useStore;
