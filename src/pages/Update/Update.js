import React, { useEffect, useState } from "react";
import { useUpdate } from "../../hooks/useUpdate";
import { useAuthContext } from "../../hooks/useAuthContext";
const Update = () => {
  const { user } = useAuthContext();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { updateUser, error, isLoading } = useUpdate();
  useEffect(() => {
    if (user && user.user) {
      setName(user.user.name || ""); // Fallback to empty string if name is undefined
      setEmail(user.user.email || ""); // Fallback to empty string if email is undefined
    }
  }, [user]);
  const handelSubmit = async (e) => {
    e.preventDefault();
    await updateUser(name, email, password);
  };
  return (
    <form className="bg-white p-5 rounded register-box" onSubmit={handelSubmit}>
      <h2 className="text-center mb-4 fw-bold">Update</h2>
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
          Update
        </button>
        {error && <div className="text-danger">{error}</div>}
      </div>
    </form>
  );
};

export default Update;
