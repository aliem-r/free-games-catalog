import SingleGameSidebar from "@/components/SingleGameSidebar";
import { GameDetails, getSingleGame } from "@/lib/games";
import { notFound } from "next/navigation";

type LayoutProps = {
    children: React.ReactNode;
    params: {
        gameId: string;
    };
};

export default async function Layout({ children, params }: LayoutProps) {
    const { gameId } = params;
    const game: GameDetails | "" = await getSingleGame(parseInt(gameId));
    if (!game) notFound();
    return (
        <main className="flex gap-9">
            <div className="w-1/2 max-w-80">
                <SingleGameSidebar game={game} />
            </div>
            <div className="flex-1 flex flex-col gap-4">{children}</div>
        </main>
    );
}
