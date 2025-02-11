import { render } from 'vitest-browser-react';
import { expect, test } from 'vitest';

import App from '../App';

test('counter button increments the count', async () => {
    const screen = render(<App />);

    await screen.getByRole('button', { name: '+' }).click();
    await expect.element(screen.getByText('1')).toBeVisible();
});
