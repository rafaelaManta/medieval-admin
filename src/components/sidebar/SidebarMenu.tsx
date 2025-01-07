import Link from "next/link";
import { useLogout } from "@/hooks/useLogout";
import { menuItems } from "@/components/sidebar/menuItems";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export const SidebarMenuUI = () => {
  const { signOut } = useLogout();
  return (
    <SidebarMenu>
      {menuItems.map((item) => {
        if (item.url === "#") {
          return (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild onClick={() => signOut()}>
                <div>
                  <item.icon />
                  <span>{item.title}</span>
                </div>
              </SidebarMenuButton>
            </SidebarMenuItem>
          );
        }
        return (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton asChild>
              <Link href={item.url} scroll={false}>
                <item.icon />
                <span>{item.title}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        );
      })}
    </SidebarMenu>
  );
};
