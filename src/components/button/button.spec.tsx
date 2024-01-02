import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import { Button } from '@components';

describe('Button', () => {
    describe('Value', () => {
        test('Should validate button without value prop', () => {
            const Wrapper = render(<Button />);
            const text = Wrapper.queryByText('Add feature');
            expect(text).not.toBeInTheDocument();
        });
        test('Should validate button value prop', () => {
            const Wrapper = render(<Button value="Add feature" />);
            const text = Wrapper.queryByText('Add feature');
            expect(text).toBeInTheDocument();
        });
    });
    describe('Size', () => {
        test('Should validate button without size prop', () => {
            const { container } = render(<Button />);
            expect(container.firstChild).toHaveClass('px-8 py-3');
        });
        test('Should validate button small size', () => {
            const { container } = render(<Button size="sm" />);
            expect(container.firstChild).toHaveClass('px-4 py-2 text-xs');
        });
        test('Should validate button medium size', () => {
            const { container } = render(<Button size="md" />);
            expect(container.firstChild).toHaveClass('px-8 py-3');
        });
    });
    describe('Style', () => {
        test('Should validate button without size prop', () => {
            const { container } = render(<Button />);
            expect(container.firstChild).toHaveClass(
                'font-semibold bg-blue-500 text-white'
            );
        });
        test('Should validate button small size', () => {
            const { container } = render(<Button style="lined" />);
            expect(container.firstChild).toHaveClass(
                'text-sky-500 border border-sky-500'
            );
        });
        test('Should validate button medium size', () => {
            const { container } = render(<Button style="default" />);
            expect(container.firstChild).toHaveClass(
                'font-semibold bg-blue-500 text-white'
            );
        });
    });
});
