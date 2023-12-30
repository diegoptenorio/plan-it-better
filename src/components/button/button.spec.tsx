import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import { Button } from '@components';

describe('Button', () => {
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
