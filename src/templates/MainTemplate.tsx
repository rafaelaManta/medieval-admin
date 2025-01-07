"use client";
import { Header, Sidebar } from "@/components";
import { TemplateProps } from "@/templates/types";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ApiTemplate } from "@/templates/ApiTemplate";

export const MainTemplate = ({
  children,
  createButtonProps = {},
  error,
  isSuccess,
}: TemplateProps) => {
  return (
    <SidebarProvider>
      <Sidebar />
      <section className={"flex flex-col w-full"}>
        <Header createButtonProps={createButtonProps} />
        <ApiTemplate error={error} isSuccess={isSuccess}>
          {children}
        </ApiTemplate>
      </section>
    </SidebarProvider>
  );
};
