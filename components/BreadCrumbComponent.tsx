import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
type Crumb = {
  label: string;
  href?: string;
};

interface AppBreadCrumbProps {
  items: Crumb[];
}
function AppBreadCrumb({ items }: AppBreadCrumbProps) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <React.Fragment key={item.label}>
              <BreadcrumbItem>
                {/* <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink> */}
                {isLast ? (
                  <BreadcrumbPage>{item.label}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink href={item.href}></BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {isLast && <BreadcrumbSeparator />}
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

export default AppBreadCrumb;
