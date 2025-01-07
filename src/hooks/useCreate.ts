import { useState, useTransition } from "react";
import { RequestFunction } from "@/hooks/types";
import { ApiError } from "@/lib/types";

export function useCreate<T>(request: RequestFunction<T>) {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<ApiError | undefined>();
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmitButtonPress = (data: T) => {
    setError(undefined);
    setIsSuccess(false);
    startTransition(async () => {
      const { error: apiError, isSuccess: apiSuccess } = await request(data);
      setError(apiError);
      setIsSuccess(apiSuccess);
    });
  };

  return {
    error,
    isPending,
    isSuccess,
    onSubmitButtonPress,
  };
}
