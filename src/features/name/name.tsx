import { Button, Input, Logo, Stepper } from '@components'

export const Name = () => (
    <>
        <Logo />
        <Stepper label='Step 1: Feature' />
        <Input />
        <Button value='Add feature' />
        <Button value='Next' />
    </>
)