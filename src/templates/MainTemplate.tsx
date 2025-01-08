"use client";
import { Header, Sidebar } from "@/components";
import { TemplateProps } from "@/templates/types";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ApiTemplate } from "@/templates/ApiTemplate";
import { useCurrentUser } from "@/hooks/useCurrentUser";

export const MainTemplate = ({
  children,
  createButtonProps = {},
  error,
  isSuccess,
  className = "",
}: TemplateProps) => {
  const { error: userError, currentUser: user } = useCurrentUser();
  return (
    <SidebarProvider>
      <Sidebar />
      <section className={`flex flex-col w-full ${className}`}>
        <Header createButtonProps={createButtonProps} user={user} />
        <ApiTemplate error={userError || error} isSuccess={isSuccess}>
          {children}
        </ApiTemplate>
      </section>
    </SidebarProvider>
  );
};
