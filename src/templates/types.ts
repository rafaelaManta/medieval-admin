import { ApiError } from "@/lib/types";

export interface TemplateProps {
  children: React.ReactNode;
  createButtonProps?: object;
  error?: ApiError | undefined;
  isSuccess?: boolean;
  className?: string;
}

export type toastType = "error" | "success" | "info" | undefined;
