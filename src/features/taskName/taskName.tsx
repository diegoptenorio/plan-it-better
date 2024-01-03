import { Button, InputList, Logo, Stepper } from '@components';

export const TaskName = () => (
    <div className="container w-[500px] flex flex-col items-center mt-[10vh]">
        <Logo />
        <Stepper label="Step 1: Feature" />
        <InputList />
        <Button value="Next" />
    </div>
);
