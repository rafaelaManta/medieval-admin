import { useState, useTransition } from "react";
import { RequestFunction } from "@/hooks/types";
import { ApiError } from "@/lib/types";

export function useUpdate<T>(request: RequestFunction<T>) {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<ApiError | undefined>();
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmitButtonPress = (data: T, id: number | undefined) => {
    setError(undefined);
    setIsSuccess(false);
    startTransition(async () => {
      const { error: apiError, isSuccess: apiSuccess } = await request(
        data,
        id,
      );
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
