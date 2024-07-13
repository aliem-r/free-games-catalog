import { Game } from "@/lib/games";
import GameSingleCard from "./GameSingleCard";
import Link from "next/link";
import { isGameCardValid } from "@/lib/utils";

type GameCardsGridProps = {
    games: Game[];
};

export default function GameCardsGrid({ games }: GameCardsGridProps) {
    return (
        <div className={"grid grid-cols-2 gap-9"}>
            {games.map(async (game) => {
                if (await isGameCardValid(game)) {
                    return (
                        <Link
                            key={game.id}
                            href={`/game/${game.id}`}
                            className="flex"
                        >
                            <GameSingleCard game={game} />
                        </Link>
                    );
                }
            })}
        </div>
    );
}
