import { Button } from "@/components/ui/button";
import { LoaderCircle } from "lucide-react";
import type { ButtonProps } from "./types";

export const ButtonUI = ({ children, isLoading, ...props }: ButtonProps) => {
  return (
    <Button {...props}>
      {isLoading && <LoaderCircle className={"animate-spin"} />}
      {children}
    </Button>
  );
};
