import { useEffect, useState, useTransition } from "react";
import { ApiError } from "@/lib/types";
import { getCurrentUser } from "@/lib/actions";

export function useCurrentUser() {
  const [error, setError] = useState<ApiError | undefined>();
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    (async () => {
      if (currentUser) {
        return;
      }
      const { user, error } = await getCurrentUser();
      setError(error);
      setCurrentUser(user);
    })();
    return () => setError(undefined);
  }, []);

  return {
    error,
    currentUser,
  };
}
