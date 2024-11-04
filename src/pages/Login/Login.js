import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { useLogin } from "../../hooks/useLogin";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();
  const handelSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };
  return (
    <form className="bg-white p-5 rounded login-box" onSubmit={handelSubmit}>
      <h2 className="text-center mb-4 fw-bold">Login</h2>
      <div className="d-flex flex-column gap-3">
        <input
          className="form-control"
          type="email"
          placeholder="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        />
        <input
          className="form-control"
          type="password"
          placeholder="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
        />
        <button disabled={isLoading} type="submit" className="btn btn-primary">
          Login
        </button>
        {error && <div className="text-danger">{error}</div>}
        <div className="fs-5 text-center">
          Don't have account ? <Link to={"/register"}>Register Now</Link>
        </div>
      </div>
    </form>
  );
};

export default Login;
