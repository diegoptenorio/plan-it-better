export type TSize = 'sm' | 'md' | undefined;

export type TStyle = {
    disabled?: boolean;
    style?: 'default' | 'lined';
};

export type TButton = {
    disabled?: boolean;
    onClick?: () => void;
    value?: string;
    size?: TSize;
    style?: 'default' | 'lined' | undefined;
};
