import { useState, useTransition } from "react";
import { ApiError } from "@/lib/types";
import { RequestFunction } from "@/hooks/types";

export function useDelete<T>(request: RequestFunction<T>) {
  const [error, setError] = useState<ApiError | undefined>();
  const [isPending, startTransition] = useTransition();
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmitButtonPress = (id: number) => {
    setError(undefined);
    setIsSuccess(false);
    startTransition(async () => {
      // @ts-ignore
      const { error: apiError, isSuccess: apiSuccess } = await request(id);
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
