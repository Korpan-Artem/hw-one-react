import React, { useState } from "react";

export const Counter = () => {
    const [counter, setCounter] = useState(0);
    return (
        <>
            <h1>{counter}</h1>
            <button type="button" onClick={() => setCounter(counter+1)}>Plus</button>
            <button type="button" onClick={() => setCounter(counter-1)}>Minus</button>
        </>
    )
}