import GameCardsGrid from "@/components/GameCardsGrid";
import { fetchGames } from "@/lib/games";
import { notFound } from "next/navigation";

type PageProps = {
    params: {
        genre: string;
    };
};

export default async function Page({ params }: PageProps) {
    const genre = params.genre != "all" ? params.genre : "";
    const games = await fetchGames(genre);

    if (!games.length) notFound();

    return <GameCardsGrid games={games} />;
}
