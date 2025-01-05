"use client";

import { Menu } from "lucide-react";
import { Button } from "@/components";
import { useSidebar } from "@/components/ui/sidebar";

export const Burger = ({ variant = "outline" }: { variant?: string }) => {
  const { toggleSidebar } = useSidebar();
  return (
    // @ts-ignore
    <Button size="icon" variant={variant} onClick={toggleSidebar}>
      <Menu />
    </Button>
  );
};
