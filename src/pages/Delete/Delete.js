import React, { useEffect, useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useDelete } from "../../hooks/useDelete";
const Delete = () => {
  const { user } = useAuthContext();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { deleteUser, error, isLoading } = useDelete();
  useEffect(() => {
    if (user && user.user) {
      setName(user.user.name || "");
      setEmail(user.user.email || "");
    }
  }, [user]);
  const handelSubmit = async (e) => {
    e.preventDefault();
    await deleteUser();
  };
  return (
    <form className="bg-white p-5 rounded register-box" onSubmit={handelSubmit}>
      <h2 className="text-center mb-4 fw-bold">Delete Account</h2>
      <div className="d-flex flex-column gap-3">
        <div>{name}</div>
        <div>{email}</div>
        <button disabled={isLoading} type="submit" className="btn btn-danger">
          Delete
        </button>
        {error && <div className="text-danger">{error}</div>}
      </div>
    </form>
  );
};

export default Delete;
