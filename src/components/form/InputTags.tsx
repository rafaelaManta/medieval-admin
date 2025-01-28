"use client";
import React, { forwardRef, useEffect, useState } from "react";
import { XIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { InputTagsProps } from "@/components/form/types";

export const InputTags = forwardRef<HTMLInputElement, InputTagsProps>(
  ({ className, value, onChange, disabled, ...props }, ref) => {
    const [pendingDataPoint, setPendingDataPoint] = useState({ tag: "" });

    useEffect(() => {
      if (pendingDataPoint.tag.includes(",")) {
        const newDataPoints = new Set([
          ...value,
          ...pendingDataPoint.tag.split(",").map((chunk) => chunk.trim()),
        ]);
        onChange(Array.from(newDataPoints));
        setPendingDataPoint({ tag: "" });
      }
    }, [pendingDataPoint, onChange, value]);

    const addPendingDataPoint = () => {
      if (pendingDataPoint) {
        const newDataPoints = new Set([...value, pendingDataPoint]);
        // @ts-ignore
        onChange(Array.from(newDataPoints));
        setPendingDataPoint({ tag: "" });
      }
    };

    return (
      <div
        className={`flex w-full flex-wrap gap-2 min-h-10 h-9 rounded-md border border-input bg-transparent
           px-3 py-2 text-sm shadow-sm transition-colors placeholder:text-muted-foreground ring-offset-white 
           disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:bg-neutral-950 
           dark:ring-offset-neutral-950 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring ${disabled ? "disabled:opacity-50" : ""} ${className}`}
      >
        {value?.map((item) => (
          <Badge
            key={item?.tag}
            variant="secondary"
            className={disabled ? "disabled:opacity-50" : ""}
          >
            {item?.tag}
            {!disabled && (
              <Button
                variant="ghost"
                size="icon"
                className="ml-2 h-3 w-3"
                onClick={() => {
                  onChange(value.filter((i) => i !== item));
                }}
              >
                <XIcon className="w-3" />
              </Button>
            )}
          </Badge>
        ))}
        <input
          disabled={disabled}
          className={`flex-1 outline-none placeholder:text-neutral-500 dark:placeholder:text-neutral-400 ${disabled ? "disabled:opacity-50" : ""}`}
          value={pendingDataPoint.tag}
          onChange={(e) => setPendingDataPoint({ tag: e.target.value })}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === ",") {
              e.preventDefault();
              addPendingDataPoint();
            } else if (
              e.key === "Backspace" &&
              pendingDataPoint.tag.length === 0 &&
              value.length > 0
            ) {
              e.preventDefault();
              // @ts-ignore
              onChange(value.slice(0, -1));
            }
          }}
          {...props}
          ref={ref}
        />
      </div>
    );
  },
);
InputTags.displayName = "InputTags";
