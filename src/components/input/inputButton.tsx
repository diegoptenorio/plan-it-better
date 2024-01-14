import { IconRemove } from '@img';
import Img from 'next/image';

type TInputButton = {
    onClick?: any;
};

export const InputButton = ({ onClick }: TInputButton) => (
    <span className="absolute inset-y-2 z-10 right-2">
        <button
            type="button"
            title="remove"
            className="p-1 focus:outline-none focus:ring"
            onClick={onClick}
        >
            <Img src={IconRemove} alt="remove task" />
        </button>
    </span>
);
