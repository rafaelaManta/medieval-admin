export type HTTPMethod = "GET" | "POST" | "PUT" | "DELETE";

export interface RequestOptions {
  cache?: RequestCache;
  headers?: HeadersInit;
  tags?: string[];
  revalidate?: number;
  shouldAddToken?: boolean;
}

export interface FetchOptions<TBody> extends RequestOptions {
  body?: TBody;
}

export interface ApiError {
  status?: number;
  message?: string;
}
