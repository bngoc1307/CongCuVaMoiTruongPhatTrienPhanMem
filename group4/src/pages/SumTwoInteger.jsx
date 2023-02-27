import React, { useEffect, useState } from "react";

function SumTwoInteger() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [sum, setSum] = useState(0);
    
    const handleNum1 = (e) => {
        setNum1(parseInt(e.target.value));
    };
    
    const handleNum2 = (e) => {
        setNum2(parseInt(e.target.value));
    };
    
    const handleSum = () => {
        setSum(num1 + num2);
    };
    
    return (
        <div>
        <input type="number" onChange={handleNum1} />
        <input type="number" onChange={handleNum2} />
        <button onClick={handleSum}>Sum</button>
        <h1>{sum}</h1>
        </div>
    );
}

export default SumTwoInteger;