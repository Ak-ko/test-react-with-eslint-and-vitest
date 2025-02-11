import { FC, useState } from 'react';

import Button from './components/Button';

const App: FC = () => {
    const [count, setCount] = useState(0);

    const handleIncrease = () => {
        setCount(count + 1);
    };

    const handleDecrease = () => {
        setCount(Math.max(0, count - 1));
    };

    return (
        <div>
            <h1>{count}</h1>
            <div>
                <Button onClick={handleDecrease}>-</Button>
                <Button onClick={handleIncrease}>+</Button>
            </div>
        </div>
    );
};

export default App;
