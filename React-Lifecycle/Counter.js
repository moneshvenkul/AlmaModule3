import React, { useState } from 'react';

function Counter() {
    // Initialize state using useState hook
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    const submitted = (e) => {
        e.preventDefault();
        console.log('Submitted');
    };

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <input type="text" onChange={increment} />

            <br/>

            <form onSubmit={submitted}>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Submit</button>
      </form>

        </div>
    );
}

export default Counter;
