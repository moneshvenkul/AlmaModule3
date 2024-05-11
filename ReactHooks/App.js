import React, { useState, useEffect, useContext, useCallback } from 'react';

// Creating a Context for the theme
const ThemeContext = React.createContext();

// A component to provide the theme context
function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light'); // default theme is light

    const toggleTheme = useCallback(() => {
      console.log('Toggling theme');
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    }, []);

    // Providing the context
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

function Counter() {
    const [count, setCount] = useState(0);
    const { theme, toggleTheme } = useContext(ThemeContext);

    // Log when count changes
    useEffect(() => {
        console.log(`The current count is: ${count}`);
    }, [count]);

    const increment = useCallback(() => {
      console.log('Incrementing count');
        setCount((prevCount) => prevCount + 1);
    }, []);

    const decrement = useCallback(() => {
      console.log('Decrementing count');
        setCount((prevCount) => prevCount - 1);
    }, []);

    return (
        <div style={{ padding: '20px', backgroundColor: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#333' : '#fff' }}>
            <h1>Counter: {count}</h1>
            <button onClick={increment}>Increase</button>
            <button onClick={decrement}>Decrease</button>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
}

function App() {
    return (
        <ThemeProvider>
            <Counter />
        </ThemeProvider>
    );
}

export default App;
