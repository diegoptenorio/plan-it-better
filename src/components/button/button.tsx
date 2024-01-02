import { TButton, TSize, TStyle } from './type';

const buttonSize = (size: TSize) => {
    const sizeOptions = {
        sm: 'px-4 py-2 text-xs',
        md: 'px-8 py-3',
    };
    return size ? sizeOptions[size] : sizeOptions.md;
};

const buttonStyle = (style: TStyle) => {
    const styleOptions = {
        default: 'font-semibold bg-blue-500 text-white',
        lined: 'text-sky-500 border border-sky-500',
    };
    return style ? styleOptions[style] : styleOptions.default;
};

export const Button = ({ value, size, style }: TButton) => (
    <button
        type="button"
        className={`
            rounded
            mb-10
            ${buttonSize(size)}
            ${buttonStyle(style)}
        `}
    >
        {value}
    </button>
);
