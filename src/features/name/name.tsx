import { Button, Input, Logo, Stepper } from '@components';

export const Name = () => (
    <div className="container w-[500px] flex flex-col items-center mt-[10vh]">
        <Logo />
        <Stepper label="Step 1: Feature" />
        <Input />
        <div className="flex flex-col items-end w-full">
            <Button value="Add feature" size="sm" style="lined" />
            <Button value="Next" />
        </div>
    </div>
);
