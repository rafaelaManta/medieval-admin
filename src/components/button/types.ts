import type { ButtonProps as ButtonUIProps } from "@/components/ui/button";
import { ButtonHTMLAttributes } from "react";

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonUIProps {
  children: React.ReactNode;
  isLoading?: boolean;
}
