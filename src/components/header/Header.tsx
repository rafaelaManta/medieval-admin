"use client";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useSidebar } from "@/components/ui/sidebar";
import Link from "next/link";
import { Burger, Button } from "@/components";
import { ChevronLeft, CircleUser, Plus } from "lucide-react";
import { literals } from "@/lib/literals";

export const Header = ({
  createButtonProps,
}: {
  createButtonProps: {
    path?: string;
    text?: string;
  };
}) => {
  const router = useRouter();
  const { isMobile } = useSidebar();
  const { data: session } = useSession();

  const { path, text } = createButtonProps;

  return (
    <header
      className={
        "px-4 py-2 bg-white sticky top-0 right-0 left-0 shadow-card border-b z-10 flex justify-between items-end"
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
            <Link href={path} className={" flex items-center gap-1.4"}>
              <Plus />
              <span>{text}</span>
            </Link>
          </Button>
        )}
      </div>
      {session?.user && !isMobile && (
        <div className={"flex gap-1 items-end"}>
          <CircleUser size={24} strokeWidth={1.2} className={"text-primary"} />
          <h3>{literals.userText.replace("%", session?.user.name)}</h3>
        </div>
      )}
    </header>
  );
};
