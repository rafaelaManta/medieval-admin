import { ApiError } from "@/lib/types";

export type RequestFunction<T> = (
  data?: T,
  id?: number,
) => Promise<{ error?: ApiError | undefined; isSuccess: boolean }>;
