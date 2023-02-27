import React, { useState } from 'react';

import './Login.css'

function Login() {
  //nhập username và password vào form đăng nhập và kiểm tra đăng nhập thành công hay không
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState("");
  //lấy giá trị của username và password
  const handleUsername = (e) => {
    setUsername(e.target.value);
  }
  const handlePassword = (e) => {
    setPassword(e.target.value);
  }
  //kiểm tra đăng nhập thành công hay không
  const checkLogin = () => {
    if (username == "admin" && password == "admin") {
      setResult("Đăng nhập thành công");
    } else {
      setResult("Đăng nhập thất bại");
    }
  }
  //viết hàm render
  return (
    <div>
      <h1>Đăng nhập</h1>
      <div>
        <input

          type="text"
          value={username}
          onChange={handleUsername}
        ></input>
        <input
          type="password"
          value={password}
          onChange={handlePassword}
        ></input>
        <button onClick={checkLogin}>Đăng nhập</button>
      </div>
      <div>
        <h3>Kết quả: {result}</h3>
      </div>
    </div>
  );
  
} 
export default Login;