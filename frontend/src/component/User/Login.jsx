// src/component/User/Login.jsx
import React, { useState } from "react";
import { register, login, logout } from "../../auth";

const Login = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleAuth = async () => {
    try {
      if (isRegistering) {
        const user = await register(email, password);
        alert("Registered: " + user.user.email);
      } else {
        const user = await login(email, password);
        alert("Logged in: " + user.user.email);
      }
    } catch (err) {
      alert("Error: " + err.message);
    }
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "400px", margin: "auto" }}>
      <h2>{isRegistering ? "Sign Up" : "Sign In"}</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ display: "block", marginBottom: "1rem", width: "100%" }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ display: "block", marginBottom: "1rem", width: "100%" }}
      />
      <button onClick={handleAuth} style={{ width: "100%", padding: "0.5rem" }}>
        {isRegistering ? "Register" : "Login"}
      </button>
      <button
        onClick={() => setIsRegistering(!isRegistering)}
        style={{ marginTop: "1rem", width: "100%" }}
      >
        {isRegistering ? "Already have an account? Sign In" : "No account? Register"}
      </button>
      <button
        onClick={logout}
        style={{ marginTop: "1rem", backgroundColor: "red", color: "white", width: "100%" }}
      >
        Logout
      </button>
    </div>
  );
};

export default Login;
