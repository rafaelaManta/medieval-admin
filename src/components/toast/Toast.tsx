import { Check, Info, XCircle } from "lucide-react";
import { literals } from "@/lib/literals";

interface ToastProps {
  errorMessage: string | undefined;
  type?: "success" | "error" | "info";
}

export function Toast({ type = "info", errorMessage }: ToastProps) {
  const toastStyles = {
    success: "bg-green-500 text-white",
    error: "bg-red-500 text-white",
    info: "bg-blue-500 text-white",
  };

  const icons = {
    success: <Check className="w-16 h-16" />,
    error: <XCircle className="w-16 h-16" />,
    info: <Info className="w-16 h-16" />,
  };

  const message = {
    success: literals.successText,
    error: errorMessage,
  };

  return (
    <div
      className={`fixed bottom-4 right-4 flex items-center space-x-3 p-4 rounded-lg  max-w-96
      shadow-lg transition-transform duration-300 ease-in-out animate-fade-in ${toastStyles[type]}`}
    >
      {icons[type]}
      {/* @ts-ignore */}
      <span className="font-medium text-base text-white">{message[type]}</span>
    </div>
  );
}
