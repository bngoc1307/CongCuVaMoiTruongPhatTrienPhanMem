import React, { useEffect, useState } from "react";

function SubtractTwoInteger() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [sub, setSub] = useState(0);
    
    const handleNum1 = (e) => {
        setNum1(parseInt(e.target.value));
    };
    
    const handleNum2 = (e) => {
        setNum2(parseInt(e.target.value));
    };
    
    const handleSub = () => {
        setSub(num1 - num2);
    };
    
    return (
        <div>
        <input type="number" onChange={handleNum1} />
        <input type="number" onChange={handleNum2} />
        <button onClick={handleSub}>Subtract</button>
        <h1>{sub}</h1>
        </div>
    );
}

export default SubtractTwoInteger;