"use client";

import { toTitleCase } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import AppLogo from "@/components/shared/app-logo";
import { redirect, usePathname } from "next/navigation";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const Header = () => {
    const pathname = usePathname();
    const [isLandingPage, setIsLandingPage] = useState(pathname === "/");

    const handleClick = () => redirect('/dashboard');

    useEffect(() => {
        setIsLandingPage(pathname === "/");
    }, [pathname]);

    return (
        <header className={`flex justify-between items-center w-full p-4 h-[72px] border-b fixed z-10 bg-background ${isLandingPage ? "" : "pl-20"}`}>
            {isLandingPage ? <AppLogo url="/" /> :
                <div className="text-xl font-bold">
                    {toTitleCase(pathname.slice(1))}
                </div>
            }
            <div>
                <SignedOut>
                    <SignInButton>
                        <Button>Sign In</Button>
                    </SignInButton>
                </SignedOut>

                <SignedIn>
                    {isLandingPage ?
                        <Button onClick={handleClick}>
                            Dashboard <ArrowRight />
                        </Button> :
                        <UserButton />
                    }
                </SignedIn>
            </div>
        </header>
    );
};

export default Header;