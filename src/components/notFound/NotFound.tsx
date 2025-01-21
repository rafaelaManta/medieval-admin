import React from "react";
import { FileQuestion } from "lucide-react";
import { literals } from "@/lib/literals";

export const NotFound = ({ className = "" }: { className?: string }) => {
  return (
    <div
      className={`w-full py-16 flex flex-col items-center justify-center bg-gray-50 rounded-lg ${className}`}
    >
      <div className="text-center space-y-4">
        <div className="flex justify-center">
          <FileQuestion className="h-24 w-24 text-gray-400" strokeWidth={0.9} />
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-medium text-gray-900">
            {literals.notFoundText}
          </h3>
        </div>
      </div>
    </div>
  );
};
