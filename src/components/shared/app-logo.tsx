import Link from "next/link";

type AppLogoProps = {
    url: string;
    size?: "sm" | "lg";
};

const AppLogo = ({ url, size = "lg" }: AppLogoProps) => {
    return (
        <Link href={url} className="flex items-center">
            <div className="min-w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-xl">N</span>
            </div>
            <h1 className={`ml-2 text-xl font-bold transition-all duration-400 delay-500 ${size === "sm" ? "hidden" : ""}`}>NextRep</h1>
        </Link>
    );
};

export default AppLogo;