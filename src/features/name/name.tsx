import { Button, Input, Logo, Stepper } from '@components';

export const Name = () => (
    <div className="w-full max-w-prose">
        <Logo />
        <Stepper label="Step 1: Feature" />
        <Input />
        <Button value="Add feature" />
        <Button value="Next" />
    </div>
);
