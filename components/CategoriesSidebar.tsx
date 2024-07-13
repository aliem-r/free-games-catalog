"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Separator } from "./ui/separator";

const categories: Record<string, string> = {
    mmorpg: "MMORPG",
    shooter: "Shooter",
    moba: "MOBA",
    anime: "Anime",
    "battle-royale": "Battle Royale",
    strategy: "Strategy",
    fantasy: "Fantasy",
    "sci-fi": "Sci-Fi",
    card: "Card Games",
    racing: "Racing",
    fighting: "Fighting",
    social: "Social",
    sports: "Sports",
};

export default function CategoriesSidebar() {
    const currentPath = usePathname();

    const CategoryList = ({ className }: { className?: string }) => {
        return (
            <ul className={className}>
                <ListItem categoryKey={"all"} categoryVal={"All Games"} />
                {Object.keys(categories).map((key) => (
                    <ListItem
                        key={key}
                        categoryKey={key}
                        categoryVal={categories[key]}
                    />
                ))}
            </ul>
        );
    };

    const ListItem = ({
        categoryKey,
        categoryVal,
    }: {
        categoryKey: string;
        categoryVal: string;
    }) => {
        const path = categoryKey ? `/${categoryKey}` : "/";
        return (
            <li>
                <Link
                    className={cn(
                        "transition-all ease-in-out",
                        "bg-zinc-900 bg-opacity-30 line-clamp-1",
                        "p-1 px-3 rounded-md ",
                        "hover:bg-zinc-900 hover:outline outline-1 outline-zinc-700",
                        "text-base uppercase",
                        currentPath === path &&
                            "bg-zinc-900 outline outline-zinc-500"
                    )}
                    href={path}
                >
                    {categoryVal}
                </Link>
            </li>
        );
    };

    return (
        <div
            className={cn(
                "flex flex-col gap-4",
                "p-5 pb-6",
                "bg-zinc-800 bg-opacity-10",
                "rounded-xl border-solid border-[1px] border-zinc-800"
            )}
        >
            <h2 className="font-medium text-2xl">Categories</h2>
            <Separator />
            <CategoryList className="flex flex-col gap-3" />
        </div>
    );
}
