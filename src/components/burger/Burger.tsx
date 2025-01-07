"use client";
import { useSidebar } from "@/components/ui/sidebar";

export const Burger = () => {
  const { toggleSidebar, open, isMobile } = useSidebar();

  if (isMobile) {
    return (
      <button
        onClick={toggleSidebar}
        className={`relative h-8 flex flex-col items-center justify-center gap-1.4  ${open && "px-2"}`}
      >
        <span
          className={`h-0.75 w-8 bg-primary rounded transition-all duration-300 ${
            open ? "" : "rotate-45 translate-y-2"
          }`}
        />
        <span
          className={`h-0.75 w-8 bg-primary rounded transition-all duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />
        <span
          className={`h-0.75 w-8 bg-primary  rounded transition-all duration-300 ${
            open ? "" : "-rotate-45 -translate-y-2"
          }`}
        />
      </button>
    );
  }

  return (
    <button
      onClick={toggleSidebar}
      className={`relative h-8 flex flex-col items-center justify-center gap-1.4 pt-2 ${open && "px-2"}`}
    >
      <span
        className={`h-0.75 w-8 bg-white rounded transition-all duration-300 ${
          open && !isMobile ? "rotate-45 translate-y-2" : ""
        }`}
      />
      <span
        className={`h-0.75 w-8 bg-white rounded transition-all duration-300 ${
          open && !isMobile ? "opacity-0" : "opacity-100"
        }`}
      />
      <span
        className={`h-0.75 w-8 bg-white rounded transition-all duration-300 ${
          open && !isMobile ? "-rotate-45 -translate-y-2" : ""
        }`}
      />
    </button>
  );
};
