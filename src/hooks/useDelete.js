import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useDelete = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { user, dispatch } = useAuthContext();
  
  const deleteUser = async () => {
    setIsLoading(true);
    setError(null);
    const response = await fetch(
      "https://authserver-dusky.vercel.app/api/user/edit/" + user.user._id,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    if (response.ok) {
      setIsLoading(false);
      localStorage.removeItem("user");
      dispatch({ type: "LOGOUT" });
    }
  };
  return { deleteUser, isLoading, error };
};
