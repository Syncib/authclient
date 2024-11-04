import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSignup } from "../../hooks/useSignup";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, error, isLoading } = useSignup();
  const handelSubmit = async (e) => {
    e.preventDefault();
    await signup(name, email, password);
  };
  return (
    <form className="bg-white p-5 rounded register-box" onSubmit={handelSubmit}>
      <h2 className="text-center mb-4 fw-bold">Register</h2>
      <div className="d-flex flex-column gap-3">
        <input
          className="form-control"
          type="text"
          placeholder="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
        />
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
          Register
        </button>
        {error && <div className="text-danger">{error}</div>}
        <div className="fs-5 text-center">
          Already Registered ? <Link to={"/login"}>Login Now</Link>
        </div>
      </div>
    </form>
  );
};

export default Register;
