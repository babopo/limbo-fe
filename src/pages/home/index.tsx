import React, { useState } from 'react';
import logo from '@/assets/logo.svg';
import { useNavigate } from 'react-router-dom';
import './index.css';

function Home() {
    const [count, setCount] = useState(0);

    const navigates = useNavigate();

    return (
        <div className="App">
            <header className="App-header">
                <h1 className="text-3xl text-blue-700">Testing</h1>
                <img src={logo} className="App-logo" alt="logo" />
                <p className=" font-bold ">Hello Vite + React + tailwind!</p>
                <p>
                    <button type="button" onClick={() => setCount(count => count + 1)}>
                        count is: {count}
                    </button>
                </p>
                <button
                    onClick={() => navigates('/about')}
                    className="py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
                >
                    Click me
                </button>
                <p>
                    Edit <code>App.tsx</code> and save to test HMR updates.
                </p>
                <p>
                    <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                        Learn React + vite + tailwind
                    </a>
                    {' | '}
                    <a
                        className="App-link"
                        href="https://vitejs.dev/guide/features.html"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Vite Docs
                    </a>
                </p>
            </header>
        </div>
    );
}

export default Home;
