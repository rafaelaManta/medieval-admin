import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";
import { Burger, Logo } from "@/components";
import { SidebarMenuUI } from "./SidebarMenu";

export function SidebarUI() {
  const { open } = useSidebar();
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className={"items-start mb-2"}>
        <Burger />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenuUI />
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div>{open ? <Logo /> : <Logo logoType={"secondary"} />}</div>
      </SidebarFooter>
    </Sidebar>
  );
}
