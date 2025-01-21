"use client";
import { Header, Sidebar } from "@/components";
import { TemplateProps } from "@/templates/types";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ApiTemplate } from "@/templates/ApiTemplate";
import { SessionProvider, useSession } from "next-auth/react";

export const MainTemplate = ({
  children,
  createButtonProps = {},
  error,
  isSuccess,
  className = "",
}: TemplateProps) => {
  return (
    <SessionProvider>
      <SidebarProvider>
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
