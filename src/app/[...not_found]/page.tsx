import Link from "next/link";
import { Button } from "@/components/ui/button";

const Page = () => {
    return (
        <div className="flex items-center justify-center min-h-screen px-4 py-12 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-background">
            <div className="w-full max-w-md space-y-6 text-center">
                <div className="space-y-3">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-primary animate-bounce">
                        404
                    </h1>
                    <p className="text-secondary-foreground">
                        Looks like you&apos;ve ventured into the unknown digital realm.
                    </p>
                </div>
                <div className="flex gap-3 justify-center">
                    <Button asChild className="w-full sm:w-auto" variant="default">
                        <Link href="/dashboard">
                            Return to Dashboard
                        </Link>
                    </Button>
                    <Button asChild className="w-full sm:w-auto" variant="secondary">
                        <Link href="/">
                            Return to LandingPage
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Page;