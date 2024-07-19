"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Frown, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <main
            className={"flex-1 flex flex-col items-center justify-center gap-6"}
        >
            <Frown className="text-zinc-700" width={100} height={100} />
            <p className="text-3xl flex items-center">{error.message}</p>
            <Link
                href={"/all"}
                className={cn(
                    buttonVariants({ variant: "outline" }),
                    "bg-transparent border-white border-opacity-20 hover:bg-white hover:bg-opacity-5 hover:border-opacity-40"
                )}
            >
                <ArrowLeft width={20} className="mr-3" /> Back to game catalog
            </Link>
        </main>
    );
}
