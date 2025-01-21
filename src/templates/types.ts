import type { ReactNode } from "react";
import type { ApiError } from "@/lib/types";

export interface TemplateProps {
  children: ReactNode;
  createButtonProps?: object;
  error?: ApiError | undefined;
  isSuccess?: boolean;
  className?: string;
}
