type Size = 'sm' | 'md' | undefined;

type Style = {
    disabled?: boolean;
    style?: 'default' | 'lined';
};

type Button = {
    disabled?: boolean;
    onClick?: () => void;
    value?: string;
    size?: Size;
    style?: 'default' | 'lined' | undefined;
};

const buttonSize = (size: Size) => {
    const sizeOptions = {
        sm: 'px-4 py-2 text-xs',
        md: 'px-8 py-3',
    };
    return size ? sizeOptions[size] : sizeOptions.md;
};

const buttonStyle = ({ disabled, style }: Style) => {
    const styleOptions = {
        default: 'font-semibold bg-blue-500 text-white',
        lined: disabled
            ? 'text-gray-400 border border-gray-400'
            : 'text-sky-500 border border-sky-500',
    };
    return style ? styleOptions[style] : styleOptions.default;
};

export const Button = ({ disabled, onClick, size, style, value }: Button) => (
    <button
        className={`
            rounded
            ${buttonSize(size)}
            ${buttonStyle({ disabled, style })}
        `}
        disabled={disabled}
        onClick={onClick}
        type="button"
    >
        {value}
    </button>
);
