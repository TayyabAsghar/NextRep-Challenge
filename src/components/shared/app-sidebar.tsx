"use client";

import { Button } from "@/components/ui/button";
import AppLogo from "@/components/shared/app-logo";
import { redirect, usePathname } from "next/navigation";
import { Menu, Home, ShoppingCart } from "lucide-react";
import { type ReactNode, type ReactElement, cloneElement, useState } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const AppSidebar = () => {
    const pathName = usePathname();
    const [selectedItem, setSelectedItem] = useState(pathName);
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);

    const toggleSidebar = () =>
        setIsSidebarCollapsed(!isSidebarCollapsed);

    const navigateScreen = (route: string) => {
        setSelectedItem(route);
        redirect(route);
    };

    const renderNavItem = (icon: ReactNode, label: string, route: string) => (
        <TooltipProvider key={label}>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button
                        variant="ghost"
                        size={isSidebarCollapsed ? "icon" : "default"}
                        className={`w-full ${isSidebarCollapsed ? 'justify-center' : 'justify-start'} ${selectedItem === route ? 'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground hover:opacity-80' : ''}`}
                        onClick={() => navigateScreen(route)}
                    >
                        {cloneElement(icon as ReactElement, { className: "h-8 w-8" })}
                        {!isSidebarCollapsed && <span className="ml-3 text-sm">{label}</span>}
                    </Button>
                </TooltipTrigger>
                <TooltipContent side="right" sideOffset={10}>
                    {label}
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );

    return (
        <aside className={`shadow-md transition-all overflow-hidden duration-200 flex flex-col fixed z-20 bg-background h-full ${isSidebarCollapsed ? 'w-16' : 'w-56'}`}>
            {/*Logo */}
            <div className="flex items-center p-4 h-[72px] border-b">
                <AppLogo url="/dashboard" size={isSidebarCollapsed ? "sm" : "lg"} />
            </div>

            {/* Navigation Items */}
            <nav className="flex-grow mt-5 px-2 space-y-2 overflow-hidden">
                {renderNavItem(<Home />, "Home", "/dashboard")}
                {renderNavItem(<ShoppingCart />, "Sales", "/sales")}
            </nav>

            {/*Toggle */}
            <div className="h-14 border-t">
                <Button variant="ghost" size="icon" onClick={toggleSidebar} className="w-full h-full rounded-none">
                    <Menu className="h-5 w-5" />
                </Button>
            </div>
        </aside>
    );
};

export default AppSidebar;