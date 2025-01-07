export type HTTPMethod = "GET" | "POST" | "PUT" | "DELETE";

export interface RequestOptions {
  cache?: RequestCache;
  headers?: HeadersInit;
  tags?: string[];
  revalidate?: number;
  shouldAddToken?: boolean;
}
