"use client";
import { Header, Sidebar } from "@/components";
import { TemplateProps } from "@/templates/types";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ApiTemplate } from "@/templates/ApiTemplate";
import { SessionProvider } from "next-auth/react";

export const MainTemplate = ({
  children,
  createButtonProps = {},
  error,
  isSuccess,
  className = "",
}: TemplateProps) => {
  //TODO: get the current value from the cookies
  //https://ui.shadcn.com/docs/components/sidebar#persisted-state
  return (
    <SessionProvider>
      <SidebarProvider defaultOpen={true}>
        <Sidebar />
        <section className={`flex flex-col w-full ${className}`}>
          <Header createButtonProps={createButtonProps} />
          <ApiTemplate error={error} isSuccess={isSuccess}>
            {children}
          </ApiTemplate>
        </section>
      </SidebarProvider>
    </SessionProvider>
  );
};
