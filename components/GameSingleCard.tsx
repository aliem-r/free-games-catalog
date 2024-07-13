import { Game } from "@/lib/games";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { AspectRatio } from "./ui/aspect-ratio";

type GameSingleCardProps = {
    game: Game;
};

export default function GameSingleCard({ game }: GameSingleCardProps) {
    return (
        <Card
            className={cn(
                "overflow-hidden border-0",
                "flex-1 flex-col justify-between transition-all ease-in-out",
                "bg-zinc-800 bg-opacity-10 outline outline-1 outline-zinc-800",
                "hover:bg-zinc-900 hover:outline-zinc-700"
            )}
        >
            <CardHeader className="p-0">
                <AspectRatio ratio={16 / 9}>
                    <Image
                        src={game.thumbnail}
                        width={400}
                        height={400}
                        alt={game.title}
                    ></Image>
                </AspectRatio>
            </CardHeader>
            <CardContent className="p-4 pt-6 pb-0">
                <h2 className="font-medium text-2xl line-clamp-1">
                    {game.title}
                </h2>
                <p className="text-sm text-zinc-600 line-clamp-1">
                    {game.publisher} & {game.developer}
                </p>
                <Separator className="max-w-20 my-4" />
                <p className="text-sm line-clamp-2 text-zinc-400">
                    {game.short_description}
                </p>
            </CardContent>
            <CardFooter className="p-4 pb-6">
                <Badge className="bg-main uppercase mr-3">free</Badge>
                <Badge variant="secondary" className="uppercase">
                    {game.genre}
                </Badge>
            </CardFooter>
        </Card>
    );
}
