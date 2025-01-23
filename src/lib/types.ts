export interface ApiError {
  statusCode: number;
  name: string;
  message: string;
  status: number;
}

export interface PageScreenContentProps<T> {
  data: T;
  id?: number;
  error?: ApiError | undefined;
  isSuccess?: boolean;
}
