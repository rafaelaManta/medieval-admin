"use client"
import Link from "next/link";
import { useLogout } from "@/hooks/useLogout";
import { menuItems } from "@/components/sidebar/menuItems";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {usePathname} from "next/navigation";

export const SidebarMenuUI = () => {
  const { signOut } = useLogout();
  const pathname = usePathname();
  const isActive = (path:string) => path === pathname;

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
              <Link href={item.url} scroll={false} className={isActive(item.url) ? 'bg-white text-black' : ''}>
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
