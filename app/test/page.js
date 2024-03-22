"use client"
import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    const incrementCounter = () => {
        console.log("Counter "+count)
        setCount(count + 1);
    };

    return (
        <div className={"h-[32rem] flex flex-col justify-center items-center"}>
            <h1>Contador: {count}</h1>
            <button onClick={incrementCounter}>Incrementar</button>
        </div>
    );
}

export default Counter;
