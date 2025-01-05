"use client";
import Link from "next/link";
import { Plus } from "lucide-react";
import { useSidebar } from "@/components/ui/sidebar";
import { Burger } from "@/components";

export const Header = ({
  createButtonProps,
}: {
  createButtonProps: {
    path?: string;
    text?: string;
  };
}) => {
  const { path, text } = createButtonProps;
  const { isMobile } = useSidebar();
  return (
    <header
      className={
        "px-4 py-3 bg-white sticky top-0 right-0 left-0 shadow-card border-b z-10"
      }
    >
      <div className={"flex items-end justify-between"}>
        {isMobile && <Burger />}
        {path && (
          <Link
            href={path}
            className={"text-primary hover:underline flex items-center gap-1.4"}
          >
            <Plus />
            <span>{text}</span>
          </Link>
        )}
      </div>
    </header>
  );
};
