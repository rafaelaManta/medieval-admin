"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronLeft, Plus } from "lucide-react";
import { useSidebar } from "@/components/ui/sidebar";
import { Burger, Button } from "@/components";

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
  const router = useRouter();
  return (
    <header
      className={
        "px-4 py-2 bg-white sticky top-0 right-0 left-0 shadow-card border-b z-10"
      }
    >
      <div
        className={`flex items-end ${isMobile ? "justify-between" : "justify-start"} gap-5`}
      >
        {isMobile && <Burger />}
        {!isMobile && (
          <Button
            size={"icon"}
            variant={"outline"}
            onClick={router.back}
            className={"border-primary hover:bg-primary hover:text-white"}
          >
            <ChevronLeft />
          </Button>
        )}
        {path && (
          <Button
            variant={"outline"}
            className={
              "rounded-full border-primary hover:bg-primary hover:text-white"
            }
          >
            <Link href={path} className={" flex items-center gap-1.4 "}>
              <Plus />
              <span>{text}</span>
            </Link>
          </Button>
        )}
      </div>
    </header>
  );
};
