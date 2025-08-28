import React from "react";

import {
  Calculator,
  Home,
  Settings,
  ShoppingCart,
  UserCheck,
  Users,
} from "lucide-react";
import { ActiveSection } from "../App";
import logo from "../assets/logo.png";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";

interface DashboardSidebarProps {
  activeSection: ActiveSection;
  onSectionChange: (section: ActiveSection) => void;
}

const navigationItems = [
  { icon: Home, label: "Dashboard", key: "dashboard" as ActiveSection },
  {
    icon: Calculator,
    label: "Accounting and Tax",
    key: "accounting" as ActiveSection,
  },
  { icon: UserCheck, label: "HR/Payroll", key: "hr" as ActiveSection },
  { icon: Users, label: "CRM", key: "crm" as ActiveSection },
  { icon: ShoppingCart, label: "POS", key: "pos" as ActiveSection },
];

export function DashboardSidebar({
  activeSection,
  onSectionChange,
}: DashboardSidebarProps) {
  return (
    <Sidebar className="bg-white border-r border-sidebar-border">
      <SidebarHeader className="border-b border-sidebar-border p-6">
        <div className="flex items-center justify-center">
          <img src={logo} alt="logo" className="h-12 w-12" />
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.key}>
                  <SidebarMenuButton
                    onClick={() => onSectionChange(item.key)}
                    className={`h-12 px-4 ${
                      activeSection === item.key
                        ? "bg-[#26A395]/10 text-[#26A395] border-r-2 border-[#26A395]"
                        : "text-[#11254A] hover:bg-[#26A395]/10 hover:text-[#26A395]"
                    }`}
                  >
                    <item.icon className="h-5 w-5" />
                    <span className="font-medium">{item.label}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border p-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className="text-[#11254A] hover:bg-[#26A395]/10 hover:text-[#26A395] h-12 px-4">
              <Settings className="h-5 w-5" />
              <span className="font-medium">Settings</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
