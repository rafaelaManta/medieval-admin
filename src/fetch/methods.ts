import { auth } from "@/auth";
import { literals } from "@/lib/literals";
import { extractErrorToSting } from "@/lib/formatters";
import type { HTTPMethod, RequestOptions } from "@/fetch/types";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

async function fetchClient<
  TResponse,
  TBody extends Record<string, unknown> | undefined = undefined,
>(
  endpoint: string,
  method: HTTPMethod,
  body?: TBody,
  options: RequestOptions = {
    shouldAddToken: true,
  },
) {
  const { shouldAddToken } = options;
  const requestHeaders: HeadersInit = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    Accept: "application/json",
  };

  if (shouldAddToken) {
    const session = await auth();
    const token = session?.user?.accessToken;

    if (!token) {
      throw new Error(literals.genericError);
    }

    requestHeaders.Authorization = `Bearer ${token}`;
  }
  const config: RequestInit = {
    method,
    headers: requestHeaders,
  };
  if (body) {
    config.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, config);
    if (!response.ok) {
      const json = await response?.json();
      const laravelMessages = extractErrorToSting(
        json?.errors ?? json?.message,
      );
      return Promise.reject({
        status: response.status,
        message: laravelMessages ?? json,
      });
    }

    if (response.status === 204) {
      return Promise.reject({
        status: response.status,
        message: literals.notFoundText,
      });
    }

    return await response.json();
  } catch (error) {
    console.error("fetchClientError", error);
    throw error;
  }
}

export async function get<TResponse>(
  endpoint: string,
  options?: RequestOptions,
): Promise<TResponse> {
  return fetchClient<TResponse>(endpoint, "GET", undefined, options);
}

export async function post<TResponse, TBody extends Record<string, unknown>>(
  endpoint: string,
  body: TBody,
  options?: RequestOptions,
): Promise<TResponse> {
  return fetchClient<TResponse, TBody>(endpoint, "POST", { ...body }, options);
}

export async function put<TResponse, TBody extends Record<string, unknown>>(
  endpoint: string,
  body: TBody,
  options?: RequestOptions,
): Promise<TResponse> {
  return fetchClient<TResponse, TBody>(endpoint, "PUT", body, options);
}

export async function del<TResponse>(
  endpoint: string,
  options?: RequestOptions,
): Promise<TResponse> {
  return fetchClient<TResponse>(endpoint, "DELETE", undefined, options);
}
