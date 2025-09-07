"use client";

import * as React from "react";
import {
  ArrowUpCircle,
  BarChart,
  CreditCard,
  LayoutDashboard,
  Settings,
  User,
  LogIn,
  UserPlus,
  HelpCircle,
  BookOpen,
  Crown,
  Waves,
  Droplet,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const navigationItems = [
  {
    title: "Dashboard",
    url: "#",
    icon: LayoutDashboard,
  },
  {
    title: "Pond Management",
    url: "#",
    icon: Waves,
  },
  {
    title: "Billing",
    url: "#",
    icon: CreditCard,
  },
  {
    title: "RTL",
    url: "#",
    icon: BarChart,
  },
];

const accountItems = [
  {
    title: "Profile",
    url: "#",
    icon: User,
  },
  {
    title: "Sign In",
    url: "#",
    icon: LogIn,
  },
  {
    title: "Sign Up",
    url: "#",
    icon: UserPlus,
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" className=" rounded-2xl  " {...props}>
      <SidebarHeader className="p-4 mt-4 w-full">
        {/* Logo Section */}
        <div className="flex items-center justify-center bg-white rounded-2xl gap-2 px-2 py-1">
          <div className="flex h-8 w-8 items-center justify-center rounded bg-orange-500">
            <Droplet className="h-5 w-5 text-white" />
          </div>
          <div>
            <div className="text-sm font-semibold text-black">SPACE</div>
            <div className="400 text-black">ECHO</div>
          </div>
        </div>
      </SidebarHeader>
      {/* <Separator className="bg-white w-[80%] mx-auto my-2" /> */}
      <div className="h-[2px] w-full max-w-md mx-auto bg-gradient-to-r from-transparent via-white to-transparent" />

      <SidebarContent className="px-3">
        {/* Main Navigation */}
        <SidebarMenu className="space-y-1 mt-3">
          {navigationItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                asChild
                className="text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg"
              >
                <a
                  href={item.url}
                  className="flex items-center gap-3 px-3 py-2"
                >
                  <item.icon className="h-4 w-4" />
                  <span className="text-sm">{item.title}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>

        {/* Account Pages Section */}
        <div className="mt-2">
          <div className="px-3 py-2">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              ACCOUNT PAGES
            </p>
          </div>
          <SidebarMenu className="space-y-1">
            {accountItems.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  asChild
                  className="text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg"
                >
                  <a
                    href={item.url}
                    className="flex items-center gap-3 px-3 py-2"
                  >
                    <item.icon className="h-4 w-4" />
                    <span className="text-sm">{item.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </div>
      </SidebarContent>

      <SidebarFooter className="p-4 bg-transparent">
        {/* Need Help Section */}
        <div className="space-y-3">
          <div className="flex flex-col items-center text-center p-4  ">
            <div className="h-12 w-12 bg-blue-600 rounded-lg flex items-center justify-center mb-3">
              <ArrowUpCircle className="h-6 w-6 text-white" />
            </div>
            <p className="text-sm font-medium text-white mb-1">Need help?</p>
            <p className="text-xs text-slate-400 mb-3">Please check our docs</p>
            <Button
              size="sm"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
            >
              <BookOpen className="h-4 w-4 mr-2" />
              DOCUMENTATION
            </Button>
          </div>

          {/* Upgrade Button */}
          <Button
            variant="outline"
            className="w-full border-slate-600 text-slate-300 hover:text-white hover:bg-slate-800"
          >
            <Crown className="h-4 w-4 mr-2" />
            UPGRADE TO PRO
          </Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
