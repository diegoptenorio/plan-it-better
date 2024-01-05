import { IconRemove } from '@img';
import Img from 'next/image';
import { TInputButton } from './types';

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
