import { ReactNode } from 'react';

export type TInput = {
    children?: ReactNode;
    id?: number;
    placeholder?: string;
    value?: string;
};

export type TInputComposition = {
    Button?: any;
    Label?: any;
};

export type TInputButton = {
    onClick?: any;
};

export type TInputLabel = {
    label?: string;
};
