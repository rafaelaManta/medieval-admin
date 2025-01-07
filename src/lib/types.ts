export interface ApiError {
  status: number;
  message: string;
}

export interface PageScreenContentProps<T> {
  data: T;
  id?: number;
  error?: ApiError | undefined;
  isSuccess?: boolean;
}
