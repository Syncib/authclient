import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useUpdate = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const {user, dispatch } = useAuthContext();
  const updateUser = async (name, email, password) => {
    setIsLoading(true);
    setError(null);
    const response = await fetch("https://authserver-dusky.vercel.app/api/user/edit/"+user.user._id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization":`Bearer ${user.token}`
      },
      body: JSON.stringify({name, email, password}),
    });
    const json = await response.json();
    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      setIsLoading(false);
      localStorage.setItem("user", JSON.stringify(json));
      dispatch({ type: "LOGIN", payload: json });
      setIsLoading(false);
    }
  };
  return { updateUser, isLoading, error };
};
