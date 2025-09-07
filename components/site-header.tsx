import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { DarkModeToggle } from "@/components/ui/dark-mode-toggle";
import AppBreadCrumb from "./BreadCrumbComponent";

export function SiteHeader() {
  return (
    <header className="group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 flex h-12 shrink-0 items-center gap-2  transition-[width,height] ease-linear">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1 text-foreground" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4 bg-foreground"
        />
        <AppBreadCrumb
          items={[
            { label: "Home", href: "/" },
            // { label: "Projects", href: "/projects" },
            // { label: "My Project" }, // last one, no href
          ]}
        />

        <div className="ml-auto">
          <DarkModeToggle />
        </div>
      </div>
    </header>
  );
}
