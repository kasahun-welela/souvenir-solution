"use client";

import * as React from "react";
import {
  IconDashboard,
  IconInnerShadowTop,
  IconUser,
  IconUserPlus,
  IconUsers,
  IconPhoto,
  IconClock,
} from "@tabler/icons-react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const data = {
  user: {
    name: "KW",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: IconDashboard,
    },
    {
      title: "Register student",
      url: "/encoder/register",
      icon: IconUserPlus,
    },
    {
      title: "Students",
      url: "/encoder/students",
      icon: IconUsers,
    },
    {
      title: "Admin Dashboard",
      url: "/admin",
      icon: IconDashboard,
    },
    {
      title: "Encoders",
      url: "/admin/encoders",
      icon: IconUser,
    },
    {
      title: "Register encoder",
      url: "/admin/encoders/create",
      icon: IconUserPlus,
    },

    {
      title: "Student Dashboard",
      url: "/student",
      icon: IconUser,
    },
    {
      title: "Gallery",
      url: "/student/gallery",
      icon: IconPhoto,
    },
    {
      title: "Reunion Countdown",
      url: "/student/countdown",
      icon: IconClock,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                <IconInnerShadowTop className="!size-5" />
                <span className="text-base font-semibold">
                  Souvenir Solutions
                </span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
