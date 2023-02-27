//import ustate và useEffect
import React, { useEffect, useState } from "react";

function SolveQuadraticEquation(){
    //nhập vào 3 số thực a, b, c và giải phương trình bậc 2 ax^2 + bx + c = 0
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [c, setC] = useState(0);
    const [result, setResult] = useState(0);
    //lấy giá trị của a, b, c
    const handleA = (e) => {
        setA(e.target.value);
        }
    const handleB = (e) => {
        setB(e.target.value);
        }
    const handleC = (e) => {
        setC(e.target.value);
        }
    //giải phương trình bậc 2 ax^2 + bx + c = 0
    const solveQuadraticEquation = () => {
        let delta = b*b - 4*a*c;
        if (delta < 0) {
            setResult("Phương trình vô nghiệm");
        } else if (delta == 0) {
            setResult("Phương trình có nghiệm kép x1 = x2 = " + (-b/(2*a)));
        } else {
            setResult("Phương trình có 2 nghiệm phân biệt: x1 = " + ((-b + Math.sqrt(delta))/(2*a)) + " và x2 = " + ((-b - Math.sqrt(delta))/(2*a)));
        }
    }
    //viết hàm render
    return (
        <div>
        <h1>Giải phương trình bậc 2</h1>
        <div>
            <input
            type="number"
            value={a}
            onChange={handleA}
            ></input>
            <input
            type="number"
            value={b}
            onChange={handleB}
            ></input>
            <input
            type="number"
            value={c}
            onChange={handleC}
            ></input>
            <button onClick={solveQuadraticEquation}>Giải</button>
        </div>
        <div>
            <h3>Kết quả: {result}</h3>
        </div>
        </div>
    );


}

export default SolveQuadraticEquation;